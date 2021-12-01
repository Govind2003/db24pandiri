const mongoose = require("mongoose")
const mugSchema = mongoose.Schema({
    mug_type:{
        type: String,
        minLength: 4
    }, 
     size: {
        type: String,
        minLength: 5
    },
    age: String
})
module.exports = mongoose.model("mug", mugSchema)