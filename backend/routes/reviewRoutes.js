const express = require('express');
const { upload, createReview, getReviews, deleteReview } = require('../controllers/reviewController');
const router = express.Router();

router.post('/', upload.single('image'), createReview);

router.get('/', getReviews);

router.delete('/:id', deleteReview);

module.exports = router;
