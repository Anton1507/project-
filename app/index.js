require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser=require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware = require('./middleware/erorr-middleware')
const routCours = require('./router/work');
const PORT = process.env.PORT||5000;
const DB_URL=process.env.DB_URL;



const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api",router);
app.use("/work",routCours);
app.use(errorMiddleware); 

async function startApp () {
    try{
        
        await mongoose.connect(DB_URL,{useUnifiedTopology:true,useNewUrlParser:true});
        app.listen(PORT,()=>{console.log(`Server started on port ${PORT}` )});
    }catch(e){
        console.log(e);
    }
}
startApp();