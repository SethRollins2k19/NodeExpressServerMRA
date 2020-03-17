
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Admin:root@toxin-s35ys.gcp.mongodb.net/Toxin?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
//
// const getUser = async (request, response) => {
//     let {email, password} = request.body
//         const collection = client.db("Toxin").collection("Users")
//         collection.find({email,password}).toArray(async (err,res)=>{
//             console.log(res)
//             await response.send(res)
//         })
//     // let res = emulatedBD.USERS.find(item=> item.email === email && item.password === password)
//     // response.send(res)
// }
// module.exports = {
//     getUser
// }