import express, { json, response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./Router/auth"
import { refreshSpotifyToken } from "./utils/spotifyapi";
import aboutMeRouter from "./Router/aboutme"


const app = express();
app.use(cors());
dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api",aboutMeRouter)
app.use("/auth",authRouter)


app.on("ready", () => {
  refreshSpotifyToken();
  setInterval(refreshSpotifyToken, 1000 * 59 * 59);
});

app.listen(port, () => {
  console.log("server running on " + port);
});
