
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var roomController = require('./controllers/roomController')
var app = express();
//

//assistant func
const toNormalDate = (date) => {
    date = date.split('T')[0]
    date = date.split('-')
    date = `${date[1]}/${date[2]}/${date[0]}`
    return date
}




const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Admin:root@toxin-s35ys.gcp.mongodb.net/Toxin?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
const mongoServer = client.connect()
const getLogin = (request, response) => {
    const {email, password} = request.body
    mongoServer.then(err => {
        const collection = client.db("Toxin").collection("Users")
        collection.find({email, password}).toArray((err, res) => {
            if(res.length === 0){
                response.send(res)
            } else {
                console.log("TYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
                getOrders(res[0]._id.toString()).then(orders => {
                    response.send({
                        ...res[0],
                        orders
                    })
                })
            }
        })
    })
    let getOrders = (key) => new Promise(((resolve, reject) => {
        const collectionOrder = client.db("Toxin").collection("Orders")
        collectionOrder.find({key}).toArray((err, res) => {
            resolve(res)
        })
    }))
}


const createAccount = (request,response) => {
    console.log(request.body)
    let {name, surname, email, password, sex, birthday, promo} = request.body.user
    birthday = toNormalDate(birthday)
    mongoServer.then(err=>{
        const collection = client.db("Toxin").collection("Users")
        collection.find({email}).toArray((err,res)=>{
            console.log(res)
            if(res.length === 0){
                console.log("insert")
                collection.insertOne({
                    name,
                    surname,
                    email,
                    password,
                    sex,
                    birth: birthday,
                    specialOffers: promo,
                    avatar: ""
                })
                response.send({message: "Account has been created",error: false})
            } else {
                console.log("no insert")
                response.send({message: "Such account has already been created",error: true})
            }
        })
    })
    console.log(birthday)
}

const addOrder = (request, response) =>{
    let {key,room,roomName,arrived,shipped,status,totalPrice} = request.body
    arrived = toNormalDate(arrived)
    shipped = toNormalDate(shipped)
    if(key!=="") {
        mongoServer.then(err => {
            collection = client.db("Toxin").collection("Orders")
            collection.find({
                key,
                room,
                roomName,
                status
            }).toArray((err,res)=>{
                if(res.length === 0){
                    collection.insertOne({
                        key,
                        room,
                        roomName,
                        arrived,
                        shipped,
                        status,
                        totalPrice
                    })
                    response.send("")
                } else {
                    response.send("You have already reserved this room")
                }
            })

        })
    } else {
        response.send("To reserve this room need to be loggined")
    }
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/RoomFetch',roomController.getRooms)
// app.post('/RoomFetch1',.getRooms)
app.get('/RoomFetch2',roomController.getRooms)
app.post('/getLogin',getLogin)
app.post('/registerAccount',createAccount)
app.post('/orderRoom',addOrder)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
