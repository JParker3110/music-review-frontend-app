import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Spotify } from 'react-spotify-embed';
import StarRating from '../components/StarRating';
import Link from 'next/link';
import '/styles/app.css'; 

const Song = ({ link, title }) => {
  const router = useRouter();
  const [rating, setRating] = useState(0);

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
      <Spotify link={link} />
      <div className="music-info" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
        <p className="song-title" style={{ marginRight: '10px', fontSize: '1.5em' }}>{title}</p>
        <div className="star-rating" style={{ marginRight: '10px' }}>
          <StarRating rating={rating} onRatingChange={setRating} />
        </div>
        <Link
          href={{
            pathname: '/leave-review', 
            query: { songLink: link, songTitle: title, songRating: rating },
          }}
          style={{ textDecoration: 'underline', color: 'blue' }} 
        >
          Leave a Review
        </Link>
      </div>
    </div>
  );
};

export default Song;
