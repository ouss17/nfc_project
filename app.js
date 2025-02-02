var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

// require("./models/connection");

var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// var historicRouter = require("./routes/paiementsHistoric");
// var priceRouter = require("./routes/availablePrices");
// var stripeRouter = require("./routes/stripe");

var app = express();

// allow cors for all url
app.use(cors({ origin: "*" }));


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/historic", historicRouter);
// app.use("/prices", priceRouter);
// app.use("/stripe", stripeRouter);

module.exports = app;
