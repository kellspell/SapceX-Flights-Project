import React, {useEffect, useState,} from 'react';
import axios from 'axios';
import './SpaceFlights.css'


function SpaceXFlights() {
  const   [flights, setFlights] = useState([ ])

  // Get info from SpaceX API https://api.spacexdata.com/v4/launches
  useEffect(() => {
    // Here we make the call to get info request to the API
    axios.get('https://api.spacexdata.com/v2/launches')
    .then((response) => {
      setFlights(response.data)
    })
    
    // handling errors
    .catch((err) => {
      console.log('Error while fetching data', err)
    })

  }, [])
  
  return (
    <div className='title_header'>
    <h1>
        <span style={{fontWeight: 'bold'}}></span> SpaceX Mission Flights
    </h1>
    <ul className='flights_lists'>
      {flights.map((flight) => (
        <li key={flight.flight_number}>
          <div className='flight_info'>
            <img 
              src={flight.links.mission_patch_small}
              alt={flight.mission_name}
              />
          </div>
          <div className='flight_data'>
          <h2>{flight.mission_name}</h2>
          <p>Flight Number: {flight.flight_number}</p>
          <p>Launched Date: {flight.launch_date_utc}</p>
          <p>Launch Date Local: {flight.launch_date_local}</p>
          <p>Flight Details: {flight.details}</p>
          <p>Launch Year: {flight.launch_year}</p>          
          <p>Rocket Name: {flight.rocket.rocket_name}</p>
          <p>Rocket Type: {flight.rocket.rocket_type}</p>
          <a href={flight.links.article_link}>Read more about the launch here</a>
          </div>          
        </li>
      ))}
    </ul>
    </div>
  );
}

export default SpaceXFlights;