import ReviewList from '../components/ReviewList';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Music Review App</h1>
      <ReviewList /> {/* Removed backendUrl since ReviewList handles fetching */}
    </div>
  );
}
