import '/styles/app.css';
import Link from 'next/link';
function MyApp({ Component, pageProps }) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Niecey Music Review App</h1>
          <p>Listen to some of my favorite songs, rate and then share a review!</p>
          <Link href="/reviews">View Reviews</Link>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          <p>© 2024 Music Review App. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default MyApp;
