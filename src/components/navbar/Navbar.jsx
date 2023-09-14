import React from 'react'
import "./Navbar.scss"
import logo from "../../assests/netflix.png"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { instance } from "../../api/allForApi"
import { useLocation } from 'react-router-dom'


const Navbar = () => {

  const location = useLocation()

  const [ countries, setCountriesData ] = useState([])

  useEffect(() => {
    instance('/watch/providers/regions')
      .then(response => setCountriesData(response.data.results))
      .catch(err => console.error(err))
  }, [])

  return  (
    <div className='navbar'>
      <div className="navbar_cont">
        <div className="nav_left">
          <img src={logo} alt="" />
          <ul className='menu_list'>
            <li><Link to='/'>HOME</Link></li>
            <li><Link>TV-SHOWS</Link></li>
            <li><Link>MOVIES</Link></li>
            <li><Link>NEW</Link></li>
            <li><Link to='/partners'>PARTNERS</Link></li>
          </ul>
        </div>
        <div className="nav_right">
          <select>
            {
              countries.map(countryList => 
                <option>{countryList.english_name}</option>
              )
            }
          </select>
          <input type="text" placeholder='Search' />
        </div>
      </div>
    </div>
  )
}

export default Navbar