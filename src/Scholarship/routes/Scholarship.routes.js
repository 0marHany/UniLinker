const { getAllScholar, addScholar, putScholar, deleteScholar } = require("../controller/Scholarship.controller");

const routes =require("express").Router();

routes.get("/scholar",getAllScholar);
routes.post("/scholar",addScholar);
routes.put("/scholar/:id",putScholar);
routes.delete("/scholar/:id",deleteScholar);


module.exports=routes;