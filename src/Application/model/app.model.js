const  mongoose  = require("mongoose")
const { appShema } = require("../schema/App.schema")

exports.App=mongoose.model("Application",appShema)