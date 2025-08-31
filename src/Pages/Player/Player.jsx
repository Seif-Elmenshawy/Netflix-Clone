import React, { useEffect, useState } from 'react'
import './player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const navigate = useNavigate()

  const {id} = useParams();

  const [apiDate, setApiDate]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTQzMTRlM2VhNWRmNTg2MDQ3YTc3ZTgxYjc3NTljNSIsIm5iZiI6MTc1NjU3MTg1MC43ODQ5OTk4LCJzdWIiOiI2OGIzMjhjYWVjYzcyZjY4OWQzY2NiY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EGuingyKzpkxzxWGdXx-DC4UqkNkI3SM_f8FIBG_pYQ'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiDate(res.results[0]))
      .catch(err => console.error(err));

  },[])


  return (
    <div className='player'>
      <img src={backarrow} alt="" onClick={()=>{
        navigate(-2)
      }} />
      <iframe height="90%" width="90%" src={`https://youtube.com/embed/${apiDate.key}`} title='Trailer' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiDate.published_at.slice(0,10)}</p>
        <p>{apiDate.name}</p>
        <p>{apiDate.typeof}</p>
      </div>
    </div>
  )
}

export default Player