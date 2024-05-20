const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

require("./DB/conn");

const Routes = require("./Routes/routes");
app.use(Routes);

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
