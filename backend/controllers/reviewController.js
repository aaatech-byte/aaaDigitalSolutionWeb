const Review = require('../models/reviewModel');
const cloudinary = require('../utils/cloudinaryConfig');
const multer = require('multer');
const asyncHandler = require('express-async-handler');

// Multer: Stores images in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
const getReviews = asyncHandler(async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Create a review
// @route   POST /api/reviews
// @access  Public
const createReview = asyncHandler(async (req, res) => {
    const { projectName, comment, starRating, designation } = req.body;

    if (!projectName || !comment || !starRating || !designation || !req.file) {
        return res.status(400).json({ message: 'All fields and an image are required' });
    }

    try {
        // Upload image to Cloudinary
        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'reviews' },
                (error, result) => {
                    if (error) {
                        console.error('Cloudinary Upload Error:', error);
                        reject(new Error('Cloudinary upload failed'));
                    } else {
                        resolve(result);
                    }
                }
            );
            uploadStream.end(req.file.buffer);
        });

        // Create a new review
        const newReview = new Review({
            projectName,
            comment,
            starRating,
            designation,
            imageUrl: uploadResult.secure_url, // Save Cloudinary URL
        });

        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Public
const deleteReview = asyncHandler(async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        // Delete image from Cloudinary
        const publicId = review.imageUrl.split('/').pop().split('.')[0]; // Extract public_id
        await cloudinary.uploader.destroy(`reviews/${publicId}`);

        // Delete review from database
        await review.deleteOne();
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = { upload, createReview, getReviews, deleteReview };
