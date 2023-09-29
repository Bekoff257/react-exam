import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../../api/allForApi';
import "./MovieView.scss"
import start from "../../assests/Star.png"

function MovieView() {
  const { id } = useParams();
  const [viewMov, setMovData] = useState({});

  useLayoutEffect(() => {
    instance(`/movie/${id}`)
      .then((res) => {
        setMovData(res.data);
        console.log(res.data)
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className='movie_view'>
      <div className="container">
        <div className="movie_about">
        <div className="mv_left">
            <img src={`https://image.tmdb.org/t/p/original/${viewMov.poster_path}`} alt="" />
        </div>
        <div className="mv_right">
            <h2>{viewMov.title}</h2>
            <p>{viewMov.overview}</p>
            <div className="released_data-rating">
                <div className="vote">
                    <div className="voted-pr">
                        <div className="star">
                        <img src={start} alt="" />
                            <h3>{parseFloat(viewMov.vote_average).toFixed(1)}</h3>
                        </div>
                        <h4>Chiqarilgan sana: {viewMov.release_date}</h4>
                    </div>
                    <p>{viewMov.vote_average} kishi ovoz bergan</p>
                    <h3 className='language'>Til: {String(viewMov.original_language).toUpperCase()}</h3>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default MovieView;
