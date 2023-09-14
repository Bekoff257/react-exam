import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Main.scss"
import { GrPlayFill } from "react-icons/gr"
import { Link, useLocation } from 'react-router-dom';

function Main() {
  const bannerLocation = useLocation()
  const [bannerMain, setBannerMain] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/top_rated?&with_networks=213', {
        headers: {
          'Authorization':
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTYzYzEwMTI3ZjBmNDlmZWI3ODhiODVmYzBiNmVmMCIsInN1YiI6IjY1MDFhNDU3MWJmMjY2MDBmZmI2MmM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lrp1_wgLkQcXx5wBSVmg_9wO8UkZCJi0ohc5hR_L0ks',
        },
      })
      .then((response) => {
        setBannerMain(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return bannerLocation.pathname.includes('/partners') ? <></> : (
    <div>
      <div className="banner_wrapper">
      <Swiper 
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]} className="mySwiper">
        {bannerMain.map((movie) => (
          <SwiperSlide>
            <div className="img_content-title">
              <Link to={`/movie-view/${movie.id}`}>
              <img className='bannerMain'
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt=""
              />
              </Link>
              <div className="about_movie">
                <h2 className='movie_title'>{movie.original_title}</h2>
                <div className="movie_btn-section">
                  <button><GrPlayFill /> Play</button>
                  <button>More info</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}    
      </Swiper>
      </div>
    </div>
  );
}

export default Main;
