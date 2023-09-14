import React from 'react'
import { useEffect, useState } from 'react'
import { instance } from "../../api/allForApi"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import "./Premiere.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

function Premiere() {
    const [ prmData, setPrmData ] = useState([])

    useEffect(() => {
        instance('https://api.themoviedb.org/3/discover/movie?&with_genres=16')
            .then(res => setPrmData(res.data.results))
            .catch(err => console.log(err))
    }, [])
  return (
    <div className='premiere'>
        <div className="container">
            <div className="prm_item">
                <h2>Premiere</h2>
                <Swiper
                    className='prm_slide'
                    autoplay={
                        {
                          delay: 1300
                        }
                      }
                      slidesPerView={3}
                      loop={true}
                      spaceBetween={10}
                      modules={[Autoplay]}
                >
                
                {
                    prmData.map(prmItm => 
                        <SwiperSlide>
                            <Link to={`/movie-view/${prmItm.id}`}><img src={`https://image.tmdb.org/t/p/original/${prmItm.backdrop_path}`} alt="" /></Link>
                        </SwiperSlide>    
                    )
                }

                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Premiere