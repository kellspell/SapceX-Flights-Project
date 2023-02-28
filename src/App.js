import React  from 'react';
import SpaceXFlights from './SpaceXFlights';



function App() {
  return(
    <div>
      <SpaceXFlights 
        style={{ padding: 10 }}
        className='title_header' 
        title={
      <h1>
        <span style={{fontWeight: 'bold'}}>Bold</span> Title
      </h1>}
      />
    </div>
  )
}



export default App;

