import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors()); // cors is middlewear, bridge between client & server

app.get("/message", (req, res) => {
  res.json({ message: "myMessage" });
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
