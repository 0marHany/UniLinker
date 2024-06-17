const { getAllScholar, addScholar, putScholar, deleteScholar } = require("../controller/Scholarship.controller");

const { Upload } = require("../../../common/services/uploadFile");

const routes =require("express").Router();

routes.get("/scholar",getAllScholar);
routes.post("/scholar",Upload.single('imageUrl'),addScholar);
routes.put("/scholar/:id",putScholar);
routes.delete("/scholar/:id",deleteScholar);


module.exports=routes;
