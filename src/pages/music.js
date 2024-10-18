import MusicPage from '../components/MusicPage';

export default function Music() {
  return (
    <div>
      <h1>Some of My Favorite Tracks</h1>
      <MusicPage /> {/* Removed backendUrl since MusicPage handles fetching */}
    </div>
  );
}
