const mongoose = require('mongoose')
const Schema= mongoose.Schema;



 const FormSchema = new Schema({
    Name: String,
    Email:String,


});

 const FormModel = mongoose.model('Formdata',FormSchema );


module.exports = FormModel;