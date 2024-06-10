
const { getAllApp, addApp, putApp, deleteApp } = require("../controller/app.controller");

const routes = require("express").Router();

const validate = require("../../../common/valid");
const { Schema } = require("../joi/app.joi");

routes.get("/app", getAllApp)
routes.post("/app", validate(Schema), addApp)
routes.put("/app/:id", validate(Schema), putApp)
routes.delete("/app/:id", deleteApp)



module.exports = routes;