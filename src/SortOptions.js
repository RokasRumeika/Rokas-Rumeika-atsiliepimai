import React, { useState } from "react";

const SortOptions = ({ reviews, onSortChange }) => {
  const [sortingOption, setSortingOption] = useState("Newest first");

  const handleSortChange = (option) => {
    setSortingOption(option);

    const sortedReviews = [...reviews];

    switch (option) {
      case "Newest first":
        sortedReviews.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));
        break;
      case "Oldest first":
        sortedReviews.sort((a, b) => new Date(a.reviewDate) - new Date(b.reviewDate));
        break;
      case "Highest rated":
        sortedReviews.sort((a, b) => b.reviewRating - a.reviewRating);
        break;
      case "Lowest rated":
        sortedReviews.sort((a, b) => a.reviewRating - b.reviewRating);
        break;
      default:
        break;
    }

    onSortChange(sortedReviews);
  };

  return (
    <select
      className="sorting-options form-select"
      onChange={(e) => handleSortChange(e.target.value)}
      value={sortingOption}
    >
      <option value="Newest first">Newest first</option>
      <option value="Oldest first">Oldest first</option>
      <option value="Highest rated">Highest rated</option>
      <option value="Lowest rated">Lowest rated</option>
    </select>
  );
};

export default SortOptions;
