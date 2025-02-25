const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true  },
  details: { type: String, required: true },
  companyName: { type: String,  },
  website: { type: String,},
  service: { type: String, required: true },
  budget: { type: String, required: true },
  heardAboutUs: { type: String, required: true },
  });

const Contact = mongoose.model("Contact", contactSchema);
module.exports = { Contact };
