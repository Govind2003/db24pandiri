const mongoose = require("mongoose")
const mugSchema = mongoose.Schema({
    mug_type: String,
    size: String,
    age: String
})
module.exports = mongoose.model("mug", mugSchema)