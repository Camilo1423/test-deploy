import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const port = process.env.PORT ?? 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
  <h2>Hi everyone</h2>
  <p>Imagen de prueba por parte de <a href="https://www.taurodev.com">Tauro Dev S.A.S</a></p>
  `);
});

app.listen(port, () =>
  console.log(`Application run in http://localhost:${port}`)
);
