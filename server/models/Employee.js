const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    Name: String,
    email: String,
    password: String
})
const EmployeeMode1 = mongoose.model("employee",EmployeeSchema)
module.exports= EmployeeMode1