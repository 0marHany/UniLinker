const { getAllEvent, addEvent, putEvent, deleteEvent } = require("../controller/event.collage");

const { Upload } = require("../../../common/services/uploadFile");

const routes =require("express").Router();

routes.get("/event",getAllEvent);
routes.post("/event",Upload.single('imageUrl'),addEvent);
routes.put("/event/:id",putEvent);
routes.delete("/event/:id",deleteEvent);


module.exports=routes;
