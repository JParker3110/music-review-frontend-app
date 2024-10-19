import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Song from '../components/Song';

const MusicPage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/music`);
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching music data:', error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="App">
      <h1>Some of My Favorite Tracks</h1>
      {songs.length > 0 ? (
        songs.map((song, index) => (
          <Song key={index} link={song.link} title={song.title} />
        ))
      ) : (
        <p>No songs available</p>
      )}
    </div>
  );
};

export default MusicPage;
