const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeMode1 = require('./models/employee')
const dotenv = require ('dotenv')
const path = require('path')
dotenv.config({path: path.join(__dirname,'config.env' , 'config.env')})
const form = require('./models/Form')




const app = express()
app.use(express.json())
app.use(cors())






const Products = require('./Product');
const order = require('./order');

app.use(express.json())
app.use('/api/v1/',order);
app.use('/api/v1/',Products);



mongoose.connect("mongodb://localhost:27017/employee");




app.post('open',(req,res)=>{
    const {Name, Email}= req.body;
    console.log(Name + "" +Email)
})



app.post("/login", (req , res)=>{
    const {email, password}= req.body;
    EmployeeMode1.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("no record existed")
        }
    })
})

app.post('/register', (req, res)=>{
    EmployeeMode1.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
})


app.post('form',(req,res)=>{
    const {Name, Email}= req.body;
    console.log(Name + "" +Email)
})


app.listen(8000,()=>{
    console.log("server is running 3001")
    })
