const mongoose = require("mongoose")
const eventSchema = require("../schema/event.schema")

exports.Event =mongoose.model("Event",eventSchema)