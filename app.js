const express=require('express')

const app =express();

//routes
app.get('/',(req,res)=>{
    res.send('We are at home tab')
})
app.get('/posts',(req,res)=>{
    res.send('We are Posts');

})
app.listen(5050);
