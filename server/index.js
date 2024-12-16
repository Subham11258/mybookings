const express = require('express');
const app = express();
const userRoutes = require("./routes/userRoutes");
const mongoose = require('mongoose');
const dburl = "mongodb+srv://Subham11258:654finVE1I2XN79L@cluster-projects.ggb8z.mongodb.net/mybookings?retryWrites=true&w=majority&appName=Demo";
app.use(express.json());

mongoose.connect(dburl).then(()=>console.log("Connected to db")).catch((err)=>console.log(err));
app.use('/',userRoutes);

app.listen(3000,()=>{
    console.log('server is connected on port 3000')
})

