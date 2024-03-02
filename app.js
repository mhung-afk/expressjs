import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!').end();
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})