const express = require("express");
const cors = require("cors");
const app = express();
const contacsRouter = require("./app/routes/contact.route");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({message: "Welcom to contact book application"})
})
app.use("/api/contacts", contacsRouter);
module.exports = app;