const express = require('express');
require("dotenv").config();
const app = express();
const db = require('./connectDb')
const cors = require("cors");
const bodyParser = require("body-parser")
// import router
const authRouter = require('./routes/auth.js')
const postsRouter = require('./routes/posts.js')


// connect to db
db.connect()

// middleware
app.use(bodyParser.json())
app.use(cors());
// routes
app.use('/api/user', authRouter)
app.use('/post', postsRouter)
const port = process.env.PORT || 5000;
app.listen(port , ()=>{
    console.log(`Server listening on ${port} !`)
})
