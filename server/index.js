const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeMode1 = require('./models/employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

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

app.listen(3001,()=>{
    console.log("server is running")
    })