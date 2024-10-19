import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ReviewForm = () => {
  const router = useRouter();
  const { songLink, songTitle } = router.query;
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (review.trim() === '' || rating === 0) {
      alert('Please provide a review and a rating.');
      return;
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: songTitle,
          content: review,
          rating,
          song_link: songLink,
          likes: 0,
        }),
      });

      if (!response.ok) {
        throw new Error('Error adding review');
      }

      const data = await response.json();
      console.log('Review added:', data);
      router.push('/');
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  if (!songTitle) return <p>Loading...</p>;

  return (
    <div>
      <h2>Add a Review for {songTitle}</h2>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            onClick={() => setRating(index + 1)}
            style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
          >
            ⭐
          </span>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here"
        />
        <button type="submit">Submit Review</button>
      </form>
      <div className="navigation-buttons">
        <Link href="/">Back to Home</Link>
        <Link href="/music">Back to Music</Link>
      </div>
    </div>
  );
};

export default ReviewForm;
