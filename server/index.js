const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/moviesRoutes');
const showRoutes = require('./routes/showRoutes.js');
const theatreRoutes = require('./routes/theatreRoutes.js');
const bookingRoute = require('./routes/bookingRoutes');

const app = express();
const userRoutes = require("./routes/userRoutes");
const mongoose = require('mongoose');

app.use(express.json());
require("dotenv").config();
app.use(cors());
// app.use(cors({origin:'https://mybookings-frontend.vercel.app/'}));
// app.use(cors(
//     {
//         origin:["https://mybookings-frontend.vercel.app/login"],
//         methods:["POST","GET","PUT","DELETE"],
//         credentials:true

//     }
// ));

const allowedOrigins = ['https://mybookings-frontend.vercel.app'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin?.replace(/\/$/, '')) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Include if your app uses cookies or sessions
};

app.use(cors(corsOptions));
app.use(cors({ origin: '*' }));

mongoose.connect(process.env.DATABASE_URL).then(()=>console.log("Connected to db")).catch((err)=>console.log(err));
app.use('/api/users',userRoutes);
app.use('/api/movies',movieRoutes);
app.use('/api/shows',showRoutes);
app.use('/api/theatres',theatreRoutes);
app.use('/api/bookings', bookingRoute);
app.use(express.static('dist'));
app.listen(3000,()=>{
    console.log('server is connected on port 3000')
})

// module.exports = (req, res) => {
//     res.status(200).send("Backend is working!");
// };