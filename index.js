import express from "express";
import {} from "dotenv/config";
import "./db.js";
import router from "./routes/user.route.js";

const app = express();
app.use(express.json());

app.use("/user", router);

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port " + process.env.PORT);
});
