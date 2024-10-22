import './styles.css';
import SearchVehicle from './components/search/SearchVehicle'
import car_image from './assets/car_image.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <SearchVehicle/>
    <div className="page">
      <section className="header-section">
        <img src={car_image} alt="Carpooling.com" />  
      </section>
      <section className="main-content">
        <div className="card">
          <i className="fas fa-car"></i>
          <h3>Your pick of rides at low prices</h3>
          <p>No matter where you're going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.</p>
        </div>
        <div className="card">
          <i className="fas fa-user-shield"></i>
          <h3>Trust who you travel with</h3>
          <p>We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you're travelling with.</p>
        </div>
        <div className="card">
          <i className="fas fa-mobile-alt"></i>
          <h3>Scroll, click, tap and go!</h3>
          <p>Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride in minutes.</p>
        </div>
      </section>
      <section className="cta-section">
        <h2>DRIVING IN YOUR CAR SOON?</h2>
        <p>Let's make this your least expensive journey ever.</p>
        <button className="cta-button">OFFER RIDE</button>
      </section>
    </div>
    <Footer/>
    </div>
  );
}



export default App;