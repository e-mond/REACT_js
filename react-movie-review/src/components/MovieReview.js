import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name%3A"Movies"%20AND%20type_of_material%3A"Review"&sort=newest&page=0&api-key=EHjQLCtR3vT5VgphcjsqhGNJxY9Adde1'
        );
        setReviews(response.data.response.docs);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Movie Reviews</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h2>{review.headline.main}</h2>
            <p>By: {review.byline.original}</p>
            <p>{review.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReview;
