import React from 'react'
import { useEffect, useState } from 'react'
import { instance } from "../../api/allForApi"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./ComingSoon.scss"

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


const ComingSoon = () => {
    const locDelCom = useLocation()
    const [ comingMovies, setDataOfSoonMovies ] = useState([])

    useEffect(() => {
        instance('/discover/movie?&with_genres=12')
            .then(res => setDataOfSoonMovies(res.data.results))
            .catch(error => console.log(error))
    }, [])
  return locDelCom.pathname.includes('/movie-view') ? <></> : (
    <div className='coming_soon'>
        <div className="container">
            <div className="cm_itm">
                <h2>Cooming Soon</h2>
                <Swiper className='coming_slide'
                    autoplay={
                        {
                          delay: 1300
                        }
                      }
                      slidesPerView={7}
                      loop={true}
                      spaceBetween={10}
                      modules={[Autoplay]}
                >

                {
                    comingMovies.map(getComingMovies => {
                        return (
                            <SwiperSlide>
                                <Link to={`/movie-view/${getComingMovies.id}`}><img src={`https://image.tmdb.org/t/p/original/${getComingMovies.poster_path}`} alt="" /></Link>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default ComingSoon