import luxury from './images/icon-luxury.svg';
import sedan from './images/icon-sedans.svg';
import suv from './images/icon-suvs.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='card-component'>

        <div className='sedans'>
          <img src={sedan} alt=""/>
          <h1>SEDANS</h1>
          <p>Choose a sedan for its affordability and excellent 
            fuel economy. Ideal for cruising in the city or on your 
            next road trip.</p>
          <button type="submit">Learn More</button>
        </div>

        <div className='suvs'>
          <img src={suv} alt=""/>
          <h1>SUVS</h1>
          <p>Take an SUV for its spacious interior, 
            power, and versatility. Perfect for your 
            next family vacation and off-road adventures.</p>
          <button type="submit">Learn More</button>
        </div>
          
        <div className='luxury'>
          <img src={luxury} alt=""/>
          <h1>LUXURY</h1>
          <p>Cruise in the best car brands without the 
             bloated prices. Enjoy the enhanced comfort 
             of a luxury rental and arrive in style.</p>
          <button type="submit">Learn More</button>
        </div>
        
      </div>
    </>
  );
}

export default App;
