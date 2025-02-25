const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Job title is required"],
    trim: true
  },
  category: {
    type: String,
    required: true,
   
  },
  type: {
    type: String,
    required: [true, "Employment type is required"],
   
  },
  description: {
    type: String,
    required: [true, "Job description is required"],
  
  },
  responsibilities: {
    type: [String],
    required: [true, "At least one responsibility is required"],
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "At least one responsibility is required"
    }
  },
  skills: {
    type: [String],
    required: [true, "At least one skill is required"],
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "At least one skill is required"
    }
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


jobSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
