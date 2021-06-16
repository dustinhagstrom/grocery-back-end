require("dotenv").config();

const mongoose = require("mongoose");

const app = require("./app");

const port = 3004;

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3004, () => {
      console.log(`Server Connected on ${port}`);
      console.log("MONGODB CONNECTED");
    });
  })
  .catch((e) => {
    console.log(e);
  });
