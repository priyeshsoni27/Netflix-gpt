import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className='absolute -z-20'>
          <img
          alt=""
          src={BG_URL}
        />
    <GptSearchBar/>
    <GptMovieSuggestions/>

    </div>
  )
}

export default GptSearch