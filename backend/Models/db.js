// const mongoose = require('mongoose');

// const DB_URL = process.env.DB_URL;

// mongoose.connect(DB_URL)
//     .then(() => {
//         console.log('MongoDB is Connected...');
//     }).catch((err) => {
//         console.log('MongoDB Conn Error...', err);
//     })

require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Conn Error...", err));
