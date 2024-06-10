const mongoose = require("mongoose");
const colSchema = require("../schema/Collage.schema");

exports.Collage = mongoose.model("Collage",colSchema)