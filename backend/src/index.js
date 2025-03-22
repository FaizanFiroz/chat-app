import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js"
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import messageRoute from './routes/message.route.js'

dotenv.config();
const app = express();
connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoute);

app.listen(PORT, ()=>{
  console.log(`Server is running at port ${PORT}`);
})