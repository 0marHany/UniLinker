const { Upload } = require("../../../common/services/uploadFile");
const { getAllUni, addUni, putUni, deleteUni } = require("../controller/University.controller");

const routes =require("express").Router();

routes.get("/uni",getAllUni);
routes.post("/uni",Upload.single("university"),addUni);
routes.put("/uni/:id",Upload.single("university"),putUni);
routes.delete("/uni/:id",deleteUni);


module.exports=routes;