import React from "react";
import './Header.css'

const Header = ({data: {confirmed, deaths, lastUpdate}}) => {
  if(!confirmed) {
    return 'loading...'
  }

  const numbersWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return(
    <div className="main-header">
      <div>
        <p className="header-text">Coronavirus Cases:</p>
        <p>{numbersWithCommas(confirmed.value)}</p>
      </div>
      <div>
        <p className="header-text">Deaths:</p>
        <p>{numbersWithCommas(deaths.value)}</p>
      </div>
      <div>
        <p className="header-text">LastUpdate:</p>
        <p>{new Date(lastUpdate).toDateString()}</p>
      </div>
    </div>
  )
}

export default Header
