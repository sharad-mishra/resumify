import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import resumeRouter from "./routes/resume.routes.js";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();

// Add CORS configuration before any routes
app.use(cors({
    origin: ['https://resumify.me', 'https://www.resumify.me', 'https://resumify-tau.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin'],
    exposedHeaders: ['Access-Control-Allow-Origin'],
    optionsSuccessStatus: 200
}));

// Add after CORS setup
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);

export default app;
