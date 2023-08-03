import express from "express";
import bodyParser from "body-parser";
import templateRouter from "./routes/template.route.js";

import * as dotenv from "dotenv";
// Setting environment variables
dotenv.config();

// Initialing express
const app = express();

// Setting express
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/", templateRouter);
app.use(express.json());
app.use(express.static("./app/public"));

// Starting API
app.listen(process.env.PORT || 3000, () =>
  console.log(`API working on PORT ${process.env.PORT || 3000}`)
);
