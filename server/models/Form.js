const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    Name: String,
    email: String,
    phone: Number,
    Select: [

    ],
    Date : String,
    Time: String,
})
const formModel1 = mongoose.model("form",formSchema)
module.exports= formModel1