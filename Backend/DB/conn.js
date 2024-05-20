const mongoose = require("mongoose");
mongoose
  .connect(`mongodb://localhost:27017/BasicApp`)
  .then(() => {
    console.log("DB connection succesfull");
  })
  .catch((err) => {
    console.log("error occuerred in DB connection ", err);
  });
