const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
        type:String,
    },
    coursePrice: {
        type:Number,
    }
});

module.exports = mongoose.model("Course", courseSchema);
