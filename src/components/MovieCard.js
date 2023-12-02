import React from 'react'
import { IMG_CND_URl } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
        <img alt="movie card" src={IMG_CND_URl + posterPath}/>
    </div>
  )
}

export default MovieCard