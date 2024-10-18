import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Song from '../components/Song';

function MusicPage() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/music`);
        console.log('Fetched songs:', response.data); // Add this line

        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching music data:', error);
        setError('Failed to load songs. Please try again later.'); // Set error message
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="App">
      <h1>Some of My Favorite Tracks</h1>
      {error && <p>{error}</p>} {/* Display error message if it exists */}
      {songs.length > 0 ? (
        songs.map((song, index) => (
          <Song key={index} link={song.link} title={song.title} />
        ))
      ) : (
        <p>No songs available</p>
      )}
    </div>
  );
}

export default MusicPage;
