import React from 'react';
import Image from 'next/image';

function ReviewList({ reviews }) {
  const getAlbumInfo = (albumId, albums) => {
    return albums.find(album => album.id === albumId);
  };

  return (
    <div>
      <h2>Review List</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            const album = getAlbumInfo(review.album_id, review.albums); // Pass albums if needed
            return (
              <li key={review.id}>
                {album && (
                  <div>
                    <Image src={album.images[0].url} alt={album.name} width={50} height={50} />
                    <p>{album.name} by {album.artists[0].name}</p>
                  </div>
                )}
                <h3>{review.title}</h3>
                <p>{review.content}</p>
                <p>Rating: {review.rating}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default ReviewList;
