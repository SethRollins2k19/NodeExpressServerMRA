const emulatedBD = require("../emulatedBD")
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Admin:root@toxin-s35ys.gcp.mongodb.net/Toxin?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

let BD = []
const getRooms = async (request,response)=>{
    if (BD.length === 0) {
        await client.connect(async err => {
            const collection = await client.db("Toxin").collection("Rooms")
            BD = await collection.find({}).toArray()
            client.close()
            await response.send(BD)
        })
    } else {
        await response.send(BD)
    }
}
module.exports = {
    getRooms
}