const mongoose = require("mongoose")
const Schema = mongoose.Schema

const carSchema = new Schema(
    {
        manufacturer: String,
        model: String,
        status: String,
        bodytype: String,
        carImage: String,
        cloudinary_id: String
},
{
    timestamps: true
})

module.exports = mongoose.model("car", carSchema)