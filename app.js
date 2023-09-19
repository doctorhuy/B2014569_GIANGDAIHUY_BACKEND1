const express = require("express");
const cors = require("cors");
const app = express();
const contacsRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({message: "Welcom to contact book application"})
})
app.use("/api/contacts", contacsRouter);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;