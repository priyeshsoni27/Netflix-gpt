import React from 'react'
import Header from './Header'
import useNowPlayinghook from '../hooks/useNowPlayinghook'
import MainContainer from './MainContainer';

const Browser = () => {

  useNowPlayinghook();
  
  return (
    
    <div><Header/>
      <MainContainer/>
    </div>
  )
}

export default Browser;