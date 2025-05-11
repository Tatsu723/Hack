import express from "express";
import { readFileSync } from "node:fs";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.post("/send", (request, response) => {
　response.send(readFileSync("./private/game.html", "utf-8"));
});
app.listen(3000);