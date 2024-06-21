const mongoose = require('mongoose')


const connectDatabase = () =>{
mongoose.connect(process.env,'mongodb://localhost:27017/mini-ecommerce').then((con)=>{
    console.log('mongo db connect to host:'+con.connection.host)
})

}

module.exports = connectDatabase