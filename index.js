import express from "express";
// import bodyParser from "body-parser";
import cors from "cors";
import calls from "./router/reviseRouter.js";
import foods from "./router/foodRouter.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

const URI =
  "mongodb+srv://admin:XF2DEsNgb15D5Ptx@cluster0.2hwjy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(cors());

app.use("/calls", calls);
app.use("/foods", foods);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Mongoose");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting", err);
  });
