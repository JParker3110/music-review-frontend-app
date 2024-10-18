import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Spotify } from 'react-spotify-embed';
import StarRating from '../components/StarRating';

const Song = ({ link, title }) => {
  const router = useRouter();
  const [rating, setRating] = useState(0);

  const handleClick = () => {
    router.push({
      pathname: '/add-review',
      query: { songLink: link, songTitle: title, songRating: rating },
    });
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Spotify link={link} />
      <p>{title}</p>
      <StarRating rating={rating} onRatingChange={setRating} />
    </div>
  );
};

export default Song;
