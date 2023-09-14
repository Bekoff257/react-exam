import './App.css';
import React from 'react';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import Partners from "./components/partners/Partners"
import Navbar from './components/navbar/Navbar';
import Trending from './components/trending-movie/Trending'
import MovieCard from './components/movie-card/MovieCard'
import ComingSoon from './components/coming_soon/ComingSoon'
import Futurestic from './components/futurestic/Futurestic'
import Premiere from './components/premiere/Premiere'
import MovieView from './components/movie-view/MovieView';

function App() {
  return (
    <div className="App">
      <React.Fragment >
        <Navbar />
        <Home />
        <Routes>
          <Route path='/partners' element={<Partners />}/>
          <Route path='/movie-view/:id' element={<MovieView />}/>
        </Routes>
        <MovieCard />
        <Trending />
        <ComingSoon />
        <Futurestic />
        <Premiere />
      </React.Fragment>
    </div>
  );
}

export default App;
