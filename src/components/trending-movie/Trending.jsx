import React from 'react'
import "./Trending.scss"
import { useEffect, useState } from 'react'
import { instance } from "../../api/allForApi"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

function Trending() {
  const [ trendingMovies, setDataOfTrendingMovies ] = useState([])

  useEffect(() => {
    instance('/discover/tv')
      .then(res => setDataOfTrendingMovies(res.data.results))
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className='trending_movies'>
      <div className="container">
        <div className="tr_items">
          <h2>Trending Now</h2>
          <Swiper className='trending_slide'
            
            autoplay={
              {
                delay: 1300
              }
            }
            slidesPerView={3}
            loop={true}
            spaceBetween={4}
            modules={[Autoplay]}>
              {
                trendingMovies.map(trendingMovie => 
                  <SwiperSlide>
                    <Link to={`/movie-view/${trendingMovie.id}`}k><img className='tr_img' src={`https://image.tmdb.org/t/p/original/${trendingMovie.backdrop_path}`} alt="" /></Link>  
                  </SwiperSlide>
                )
              }
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Trending