const express = require("express");
const app = express();
require("dotenv").config()
const router = require("./routers/todo_router")
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use("/api/v1/todo", router)

module.exports = app