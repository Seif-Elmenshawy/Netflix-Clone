import React, { useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {

  const[apiData, setApiDate] = useState([]);

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTQzMTRlM2VhNWRmNTg2MDQ3YTc3ZTgxYjc3NTljNSIsIm5iZiI6MTc1NjU3MTg1MC43ODQ5OTk4LCJzdWIiOiI2OGIzMjhjYWVjYzcyZjY4OWQzY2NiY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EGuingyKzpkxzxWGdXx-DC4UqkNkI3SM_f8FIBG_pYQ'
  }
};
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiDate(res.results))
  .catch(err => console.error(err));
  
  })

  return (
    <div className='titleCards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img  src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards