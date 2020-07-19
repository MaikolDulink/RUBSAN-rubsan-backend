import express from "express";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import "./database";
import routes from "./routes";
const app = express();

// Config dotenv

dotenv.config({ path: ".env" });

// Config setting
const PORT = process.env.PORT;
app.set("port", PORT || 3000);

// Morgan

app.use(morgan("dev"));

// Express

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors

app.use(cors());

// Router

app.use("/api", routes());

// Listen Server

app.listen(app.get("port"), () => {

  console.log(colors.green(`Server on port: ${PORT}`));

});
