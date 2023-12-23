const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();
const cors = require("cors");

// port
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/graph", require("./routes/graphRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
