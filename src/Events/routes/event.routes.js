const { getAllEvent, addEvent, putEvent, deleteEvent } = require("../controller/event.collage");

const routes =require("express").Router();

routes.get("/event",getAllEvent);
routes.post("/event",addEvent);
routes.put("/event/:id",putEvent);
routes.delete("/event/:id",deleteEvent);


module.exports=routes;