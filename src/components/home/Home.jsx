import React from 'react'
import Main from '../main/Main'
import { useLocation } from 'react-router-dom'

function Home() {

    const locationForAll = useLocation()
  return locationForAll.pathname.includes('/partners') | locationForAll.pathname.includes('/movie-view') ? <></> : (
    <div>
        <Main />
    </div>
  )
}

export default Home