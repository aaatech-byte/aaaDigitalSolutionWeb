const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: {
     type: String,
      required: true
     },
  description: {
     type: String,
      required: true
     },
  toolsUsed: { 
    type: String,
     required: true 
    },
  imageUrl: { 
    type: String,
     required: true
     },
}, 
{
  timestamps: true,
}
);

const Project = mongoose.model('Project', projectSchema);
module.exports = { Project };
