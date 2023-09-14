import React from 'react'
import "./Futurestic.scss"
import { useEffect, useState } from 'react'
import { instance } from "../../api/allForApi"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

function Futurestic() {
    const [ futuresStic, setDataFuturestic ] = useState([])

    useEffect(() => {
        instance('/discover/movie?&with_genres=35')
            .then(response => setDataFuturestic(response.data.results))
            .catch(err => console.log(err))
    }, [])
  return (
    <div className='futurestic'>
        <div className="container">
            <div className="ft_itm">
                <h2>Futurestic</h2>
                <Swiper className='ftr_slide'
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
                        futuresStic.map(ftItms => 
                            <SwiperSlide>
                                <Link to={`/movie-view/${ftItms.id}`}><img src={`https://image.tmdb.org/t/p/original/${ftItms.poster_path}`} alt=""/></Link>
                            </SwiperSlide>  
                        )
                    }
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Futurestic