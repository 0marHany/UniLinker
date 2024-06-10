const { getAllCollage, addCollage, putCollage, deleteCollage } = require("../controller/Collage.controller");

const routes =require("express").Router();

routes.get("/collage/:uni_id",getAllCollage);
routes.post("/collage",addCollage);
routes.put("/collage/:id",putCollage);
routes.delete("/collage/:id",deleteCollage);


module.exports=routes;