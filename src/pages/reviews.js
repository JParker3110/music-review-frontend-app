// pages/reviews.js
import React from 'react';
import ReviewList from '../components/ReviewList';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:4001/api/reviews');
  const reviews = await res.json();

  return { props: { reviews } };
}

export default Reviews;
