const express=require('express')
const mongoose =require('mongoose')
const app =express();

const User=require("./model/user")
require('dotenv/config')

app.use(express.json()); 
//routes

// const customMiddleware=(re,res,next)=>{
//     console.log('Welcome to My MiddleWare')
//     next();
// }
// app.use(customMiddleware);
app.get('/',(req,res)=>{
    res.send("First Request!!!")
})

app.get("/users",(req,res)=>{
    let users=["Sambhav","Superguy","flutter guy"];

    // res.send(users)
    res.send({
        users:users,
    })
});


app.post("/create_users",async(req,res)=>{
try{
    const myuser=new User(req.body);
    // console.log(req.body.name);
    await myuser.save()
    res.send(myuser)
}catch(err){
    res.send({message:err})
}
});


mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    (req,res)=>{
    console.log("Connected to the databse")
});

app.listen(5050,()=>{
    console.log('Listening to 5050');
});
