const emulatedBD = require("../emulatedBD")

exports.getRooms = (request,response)=>{
    response.send(emulatedBD.ROOMS)
}