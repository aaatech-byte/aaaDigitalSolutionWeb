import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ReviewList.css"; 
const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5012/api/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };


  const deleteReview = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    try {
      await axios.delete(`http://localhost:5012/api/reviews/${id}`);
      setReviews(reviews.filter((review) => review._id !== id)); 
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 !== 0; 
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 

    return (
      <div className="star-rating">
        {"★".repeat(fullStars)} {/* Full stars */}
        {hasHalfStar && "☆"} {/* Half star */}
        {"☆".repeat(emptyStars)} {/* Empty stars */}
      </div>
    );
  };

  return (
    <div className="review-container">
      <h2 className="title">Reviews</h2>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : reviews.length === 0 ? (
        <p className="no-reviews">No reviews available.</p>
      ) : (
        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review._id} className="review-card">
              <img src={review.imageUrl} alt={review.projectName} className="review-image" />
              <h3 className="review-name">{review.projectName}</h3>
              <p className="review-comment">{review.comment}</p>
              
              
              <p className="review-rating">
                {renderStars(review.starRating)} <span className="rating-number">({review.starRating}/5)</span>
              </p>

              <p className="review-designation">Designation: {review.designation}</p>

              <button onClick={() => deleteReview(review._id)} className="delete-button">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewList;
