const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/moviesRoutes');
const app = express();
const userRoutes = require("./routes/userRoutes");
const mongoose = require('mongoose');
const dburl = "mongodb+srv://Subham11258:654finVE1I2XN79L@cluster-projects.ggb8z.mongodb.net/mybookings?retryWrites=true&w=majority&appName=Demo";
app.use(express.json());

app.use(cors());

mongoose.connect(dburl).then(()=>console.log("Connected to db")).catch((err)=>console.log(err));
app.use('/api/users',userRoutes);
app.use('/api/movies',movieRoutes);
app.listen(3000,()=>{
    console.log('server is connected on port 3000')
})

