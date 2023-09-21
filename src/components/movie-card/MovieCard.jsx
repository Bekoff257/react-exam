import React from 'react'
import "./MovieCard.scss"
import { useState, useEffect } from 'react'
import { instance } from '../../api/allForApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

function MovieCard() {
  const [ movieList, setMovieList ] = useState([])

  useEffect(() => {
    instance(`/discover/movie?&with_genres=28`)
      .then(response => {
        setMovieList(response.data.results)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='movie_card'>
        <div className="container">
          <div className="movie_card-items">
          <div className="movie_card-text">
            <h2 className='hollywood_text'>Hollywood Movies</h2>
          </div>
            <div div className="slide_and_movies">
            <Swiper className='movieList_swiper' 
              slidesPerView={7}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              autoplay={
                {
                  delay: 1300
                }
              }loop={true}
              modules={[Autoplay]}>
      
            {movieList.map(movieCards => (
              <SwiperSlide key={movieCards.id}>
                <Link to={`/movie-view/${movieCards.id}`}><img src={`https://image.tmdb.org/t/p/original/${movieCards.poster_path}`} alt="" /></Link>
              </SwiperSlide>
            ))}
        </Swiper>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard