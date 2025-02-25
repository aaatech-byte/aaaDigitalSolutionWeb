const { Contact } = require('../models/contactModel');
const sendContactEmail = require('../utils/sendContactEmail');

const asyncHandler = require('express-async-handler');

const createContactMessage = asyncHandler(async (req, res) => {
  const {  name, phoneNumber, email,  city, details, companyName, website, service, budget, heardAboutUs } = req.body;

  if (!companyName ||  !name || !phoneNumber || !email ||   !budget || !heardAboutUs || !details || !city|| !service ) {
    console.log("Missing Fields:", req.body);
      return res.status(400).json({ message: "All fields are required" });
  }

  try {
      const contactMessage = await Contact.create({
          companyName,
          website,
          name,
          phoneNumber,
          email,
          details,
          budget,
          heardAboutUs,
          city,
          service
      });

      await sendContactEmail(name, email);
      return res.status(201).json({ message: "Contact message created successfully", contactMessage });
  } catch (error) {
      console.error('Error creating contact message:', error);
      console.error("Error creating contact message:", error);
      return res.status(500).json({ message: "Server error", error: error.message });
  }
});


const getContactMessages = asyncHandler(async (req, res) => {
    try {
       
        const contactMessages = await Contact.find().sort({ createdAt: -1 });

        
        return res.status(200).json({ message: "Contact messages retrieved successfully", contactMessages });
    } catch (error) {
       
        return res.status(500).json({ message: error.message });
    }
});

module.exports = {
    createContactMessage,
    getContactMessages
};