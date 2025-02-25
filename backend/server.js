require('dotenv').config();
console.log('Loaded ENV:', process.env.CLOUDINARY_API_KEY);

const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes.js');
const blogRoutes = require('./routes/blogRoutes.js');
const reviewRoutes = require('./routes/reviewRoutes.js');
const projectRoutes = require('./routes/projectRoutes.js');
const jobApplicationRoutes = require('./routes/jobApplicationRoutes.js');
const jobRoutes = require("./routes/jobRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");

const app = express();

connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// **Routes**

app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/job-applications', jobApplicationRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5012;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
