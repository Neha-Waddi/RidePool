import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

import './styles.css';

const Home = () => {
  return (
    <div className="page">
      {/* Header Section */}
      <section className="header-section">
        <img src={homeImage} alt="Carpooling.com" />  
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="card">
          <i className="fas fa-car"></i> {/* Font Awesome Car Icon */}
          <h3>Your pick of rides at low prices</h3>
          <p>No matter where you're going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.</p>
        </div>
        <div className="card">
          <i className="fas fa-user-shield"></i> {/* Font Awesome Shield Icon */}
          <h3>Trust who you travel with</h3>
          <p>We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you're travelling with.</p>
        </div>
        <div className="card">
          <i className="fas fa-mobile-alt"></i> {/* Font Awesome Mobile Icon */}
          <h3>Scroll, click, tap and go!</h3>
          <p>Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride in minutes.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>DRIVING IN YOUR CAR SOON?</h2>
        <p>Let's make this your least expensive journey ever.</p>
        <button className="cta-button">OFFER RIDE</button>
      </section>
    </div>
  );
}



exports.Home = Home;

export default App
