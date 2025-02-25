const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  fullName: { 
    type: String,
    required: true,
     trim: true
     },
  email: {
     type: String,
      required: true
     },
  phone: {
     type: String, 
     required: true 
    },
  position: {
     type: String,
      required: true
     },
  experience: {
     type: Number,
      required: true 
    },
  about: { 
    type: String,
     trim: true
     },
  cvUrl: { 
    type: String,
     required: true
     },
  createdAt: { 
    type: Date, 
    default: Date.now
   }
}
);

module.exports = mongoose.model('JobApplication', jobApplicationSchema);