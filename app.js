const express = require('express');
const api = require('./email');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 5000; 

const app = express();
app.use(express.json());
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
