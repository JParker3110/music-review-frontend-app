import React from 'react';
import Image from 'next/image';

const ReviewList = ({ reviews = [] }) => { 
  return (
    <div>
      <h2>Review List</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.title}</h3>
              <p>{review.content}</p>
              <p>Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default ReviewList;
