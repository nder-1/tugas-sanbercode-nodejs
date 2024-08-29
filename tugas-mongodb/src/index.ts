import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './utils/database';
import apiRoutes from './routes/api';

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
