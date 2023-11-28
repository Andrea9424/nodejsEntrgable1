const express = require("express");
const app = express();
const user = require("./users/users.route");
const repair = require("./repairs/repairs.route");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", user);

app.use("/", repair);

module.exports = app;
