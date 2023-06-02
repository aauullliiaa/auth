import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected');
} catch (error) {
    console.log(error)
}
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () =>
    console.log('Server berjalan di port 5000'));
