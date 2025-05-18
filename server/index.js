import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import complaintsRouter from './routes/complaints.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/complaints', complaintsRouter);

app.get('/', (req, res) => {
  res.send('Complaint Management Backend Running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});