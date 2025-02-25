const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  name: {
     type: String,
      required: true
     },
  category: { 
    type: String,
     required: true 
    },
  introduction: {
     type: String,
      required: true 
    },
  description1: { 
    type: String, 
    required: true
   },
  description2: {
     type: String,
      required: true 
    },
  description3: {
     type: String, 
     required: true 
    },
  description4: {
     type: String,
      required: true
     },
  description5: {
     type: String, 
     required: true 
    },
  conclusion: { 
    type: String,
     required: true
     },
  imageUrl: { type: 
    String, required:
     true },
},
 { 
  timestamps: true
 }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
