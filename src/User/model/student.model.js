const mongoose=require("mongoose");
const studentSchema = require("../schema/student.schema");

exports.Students=mongoose.model("student",studentSchema)