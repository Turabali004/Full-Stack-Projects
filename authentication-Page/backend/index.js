import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv"; // Import dotenv
import authRoutes from "./routes/auth.routes.js"


dotenv.config(); // Load env variables


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use("/api/auth", authRoutes)

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000", 3000);
});
