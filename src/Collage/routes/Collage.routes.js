const { Upload } = require("../../../common/services/uploadFile");

const { getAllCollage, addCollage, putCollage, deleteCollage } = require("../controller/Collage.controller");

const routes =require("express").Router();

routes.get("/collage/:uni_id",getAllCollage);
routes.post("/collage",Upload.single('imageUrl'),addCollage);
routes.put("/collage/:id",Upload.single('imageUrl'),putCollage);
routes.delete("/collage/:id",deleteCollage);


module.exports=routes;