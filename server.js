const express= require('express');
const app=express();
const cors=require('cors');
app.use(cors({
    origin: 'https://quleep.vercel.app',  // your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // allowed HTTP methods
    credentials: true  // if your requests include cookies or authentication headers
  }));
app.use(express.json());
const port=5000;
const connection=require('./db');
connection();

const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})