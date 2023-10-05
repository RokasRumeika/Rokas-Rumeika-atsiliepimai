import React, { useState } from "react";
import UserReviews from "./UserReviews";
import SortOptions from "./SortOptions";
import AddReviewForm from "./AddReviewForm";

const App = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      userEmail: "user1@gmail.com",
      reviewerName: "Eve",
      reviewText: "Lorem ipsum",
      reviewTime: "12:30",
      reviewDate: "2023-03-15",
      reviewRating: 4,
    },
    {
      id: 2,
      userEmail: "user2@gmail.com",
      reviewerName: "Frank",
      reviewText: "Lorem ipsum",
      reviewTime: "13:45",
      reviewDate: "2023-04-20",
      reviewRating: 3,
    },
    {
      id: 3,
      userEmail: "user3@gmail.com",
      reviewerName: "Grace",
      reviewText: "Lorem ipsum",
      reviewTime: "14:20",
      reviewDate: "2023-05-10",
      reviewRating: 5,
    },
  ]);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((total, review) => total + review.reviewRating, 0) /
        reviews.length
      : 0;

  const addReview = (newReviewData) => {
    const newReviewId = reviews.length + 1;
    const reviewToAdd = { id: newReviewId, ...newReviewData };
    setReviews([...reviews, reviewToAdd]);
  };

  return (
    <div id="my-app">
      <h2>User Reviews</h2>
      <div className="review-controls">
        <span className="review-average">
          Average Rating ({averageRating.toFixed(1)}){" "}
          {generateStarRating(averageRating)}
        </span>
        <span className="sort-label" id="sort-by">
          Sort Reviews By
        </span>
        <SortOptions
          reviews={reviews}
          onSortChange={(sortedReviews) => setReviews(sortedReviews)}
        />
      </div>
      <UserReviews reviews={reviews} />
      <AddReviewForm onSubmit={addReview} />
    </div>
  );
};

const generateStarRating = (rating) => {
  const fullStars = "★".repeat(Math.floor(rating));
  const emptyStars = "☆".repeat(5 - Math.floor(rating));
  return (
    <span>
      {fullStars}
      {emptyStars}
    </span>
  );
};

export default App;
