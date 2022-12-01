import React from 'react';
import Navbar from '../Navbar/Navbar';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h1>Welcome to Charles Hayden Planetarium</h1>
        </div>
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 align-items-center my-5" id="homepage" >
            <div class="col-lg-7">
            <img src="src/a3e1462ce283d8694e0458336d1c0e59.gif" alt="star gif" />
            </div>
            <div class="col-lg-5">
              <h2 class="font-weight-light">Join us for an amazing experience!</h2>
              <p>
              You can experience some amazing things during a show in the Charles Hayden Planetarium. A descent through Jupiter's atmosphere. The surface of an exoplanet. The night sky, velvety black and strewn with stars. Or even your favorite music, presented in an entirely new way.
              </p>
              <a class="btn btn-primary" href="#!">
                More Info
              </a>
            </div>
          </div>
          
          
        </div>
        
      </div>
    </div>
  );
}
export default Home;