import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// service functions from handleMeta.js
import {
  verify,
  checkKYC,
} from "./services/handleMeta.js";

// Health check service
import { checkAPIHealth } from "./services/checkAPIHealth.js";


// Load environment variables
dotenv.config();

const app = express();

//  Middleware setup
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL?.split(",") ?? ["http://localhost:3000"],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(cookieParser());

//  Routes
app.get("/health", checkAPIHealth);
app.post("/kyc-verify", verify);
app.post("/kyc-check", checkKYC);


//  Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Node server listening on port ${PORT}!`)
);
