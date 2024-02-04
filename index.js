import express from "express";
import connectToDb from "./db/index.js";
import router from "./routes/api/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.use(compression());
app.use(express.static(join(__dirname, "public", "client")));

app.set("trust proxy", 1);

Promise.all([connectToDb()])
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server is running on PORT http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
