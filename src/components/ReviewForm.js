import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ReviewForm = () => {
  const router = useRouter();
  const { songLink, songTitle } = router.query;
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      router.push('/'); // Redirect to home or music page after submitting
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div>
      <h2>Add a Review for {songTitle}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here"
        />
        <button type="submit">Submit Review</button>
      </form>
      <Link href="/">Back to Home</Link> {/* Add Back to Home link */}
      <Link href="/music">Back to Music</Link> {/* Add Back to Music link */}
    </div>
  );
};

export default ReviewForm;
