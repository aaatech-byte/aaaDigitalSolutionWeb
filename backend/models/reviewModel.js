const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  comment: { type: String, required: true },
  starRating: { type: Number, required: true },
  designation: { type: String, required: true },
  imageUrl: { type: String, required: true }, 
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
