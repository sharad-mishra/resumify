import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import resumeRouter from "./routes/resume.routes.js";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: function(origin, callback) {
        const allowedOrigins = process.env.ALLOWED_SITE?.split('||').map(site => site.trim()) || [
            'https://resumify.me',
            'https://www.resumify.me',
            'https://resumify-tau.vercel.app'
        ];
        
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);

export default app;
