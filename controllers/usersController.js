const emulatedBD = require('../emulatedBD')

exports.getUser = (request, response) => {

    let {email, password} = request.body
    let res = emulatedBD.USERS.find(item=> item.email === email && item.password === password)
    response.send(res)
}