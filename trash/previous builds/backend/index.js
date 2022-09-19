import express from "express";
import db from "./config/database.js";
import cookieParser from "cookie-parser";
import expressSession from 'express-session';
import bodyParser from "body-parser";
import postRoutes from "./routes/index.js";
import userRoutes from "./routes/user.js";
import jobRoutes from "./routes/jobs.js";
import indexRoutes from "./routes/index.js";
import cors from "cors";

const saltRounds = 10;
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(
    cors({ 
        credentials:true, 
        origin:'http://localhost:3000',
        methods: ["GET", "POST", "DELETE", "PATCH"],
    }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    expressSession({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
        expires: 60 * 60 * 24,
    },
    })
);
app.use('/', indexRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/jobs', jobRoutes);
 
app.listen(5050, () => console.log('Server running at port 5050'));