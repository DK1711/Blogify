import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes.js";
import { connection } from "./mongodb.js";
import dotenv from "dotenv";

const app = express();

// Configure CORS to allow requests from your frontend
app.use(
  cors({
    origin: "*", // Allow only this origin
    methods: "GET,POST,PUT,DELETE", // Specify which methods are allowed
    credentials: true, // Allow cookies or authentication headers
  })
);

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

connection();

app.listen(8000, () => {
  console.log("Server running successfully");
});
