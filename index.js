import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const port = process.env.PORT ?? 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Gracias nexos por la confianza" });
});

app.listen(port, () =>
  console.log(`Application run in http://localhost:${port}`)
);
