const mongoose = require("mongoose");
const uniSchema = require("../schema/University.schema");

exports.Uni = mongoose.model("University",uniSchema)