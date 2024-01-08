const express = require("express");
const app = express();

const createContact = require("./routes/createContact");
const port = 3000;
app.use(express.json());
app.use("/api/contact", createContact);
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
