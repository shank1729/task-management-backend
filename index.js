import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

// const PORT = 8000;

// Connection();

// app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));
console.log("connecting to db...");
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log("connected !!!");
      console.log(`Api is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });