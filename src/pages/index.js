// import { useEffect, useState } from 'react';
// import Song from '../components/Song';

// const Home = ({ backendUrl }) => {
//   const [music, setMusic] = useState([]);

//   useEffect(() => {
//     const fetchMusic = async () => {
//       const response = await fetch(`${backendUrl}/api/music`);
//       const data = await response.json();
//       setMusic(data);
//     };

//     fetchMusic();
//   }, [backendUrl]);

//   return (
//     <div>
//       <h1>Welcome to the Music Review App!</h1>
//       <h2>My Favorite Tracks</h2>
//       {music.map((track) => (
//         <Song key={track.id} link={track.link} title={track.title} />
//       ))}
//     </div>
//   );
// };

// export default Home;
