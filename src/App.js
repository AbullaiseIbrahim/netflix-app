import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import Footer from './components/Footer/Footer';
import Wishlist from './components/RowPost/Wishlist';
import {trending, originals, actions, comedyMovies, horrorMovies, romanceMovies} from './urls';

function App() {
  const [wishlistArray, setWishlistArray] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Banner onChange={ (newValue) => setWishlistArray(newValue) } />
      <RowPost url={trending} title='Trending' />
      { wishlistArray.length > 0 && <Wishlist url={trending} selectedArray={wishlistArray} title='My Wishlist' isSmall />}
      <RowPost url={originals} title='Originals' isSmall />
      <RowPost url={actions} title='Actions' isSmall />
      <RowPost url={comedyMovies} title='Comedy Movies' isSmall />
      <RowPost url={horrorMovies} title='Horror Movies' isSmall />
      <RowPost url={romanceMovies} title='Romance Movies' isSmall />
      <Footer/>
    </div>
  );
}

export default App;