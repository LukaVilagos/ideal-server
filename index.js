const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const port = 10001;

app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./middleware/jwtAuth"));
app.use("/api/read", require("./src/routes/read"));
app.use("/api/upload", require("./src/routes/upload"));
app.use("/api/update", require("./src/routes/update"));
app.use("/api/delete", require("./src/routes/delete"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
