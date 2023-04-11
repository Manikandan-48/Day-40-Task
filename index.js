const express = require ('express');
const router=require ('./router/router')

const mongo =require('./connect')
const dotenv=require('dotenv')

const port=process.env.PORT || 8000

const app=express();

dotenv.config();
mongo.connect();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("You are welcome to Book Your Rooms🙏");
})

app.use('/api',router)
app.listen(port,()=>{

    console.log(`The server is listening on port: ${port}🎇✨`);
})
