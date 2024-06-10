const mongoose = require("mongoose");
const scolarSchema = require("../schema/Scholarship.schema");

exports.Scolar = mongoose.model("scolarship",scolarSchema)