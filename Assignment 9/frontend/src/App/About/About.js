import React from 'react';
import Navbar from '../Navbar/Navbar';
const About = () => {
  return (
    
    <div>
       <Navbar />
    <div class="card text-white bg-dark my-5 py-4 text-center">
      <div class="card-body">
        <p class="text-white m-0">
        We are one of the largest planetarium chain with over 25 screens world wide
        </p>
      </div>
    </div>
    <h2> Current Shows available</h2>
    <div class="row gx-4 gx-lg-5">
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Birth of Planet Earth </h2>
            <h5> 55 mins</h5>
            <p class="card-text">
            Scientists now believe that our galaxy is filled with solar systems, including up to a billion planets roughly the size of our own. The film employs advanced, data-driven, cinematic-quality visualizations to explore some of the greatest questions in science today: How did Earth become a living planet in the wake of our solar system's violent birth? What does its history tell us about our chances of finding other worlds that are truly Earth-like? Produced by Spitz Creative Media, NCSA's Advanced Visualization Lab, Thomas Lucas Productions, Inc., in association with Tellus Science Museum. This project has been made possible with support from the Commonwealth of Pennsylvania and the Greater Philadelphia Film Office; funded in part by the National Science Foundation.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Dinosaurs at Dusk</h2>
            <h5> 45 mins</h5>
            <p class="card-text">
            Take to the skies and discover the origins of flight. Dinosaurs at Dusk is a learning adventure of a father and his teenage daughter Lucy who share a fascination for all things that fly. You'll travel back in time to meet the pterosaurs and the ancestors of modern-day birds: the feathered dinosaurs. Lucy and her father will navigate from continent to continent to look for clues for the origins of flight until time runs out and they experience first-hand the cataclysmic last day of the dinosaurs. Science content includes topics such as continental drift, proper motion of stars, asteroids and impacts, extinctions and the convergent development of flight among species. Please note that since this is a longer show, we might will not have time for the Q and A session if it is chosen.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Secret Lives of Stars</h2>
            <h5> 30 mins</h5>
            <p class="card-text">
            Not all stars are created equal. Some are massive. Others are tiny; almost insignificant. The specific characteristics of a star will determine what type of life it will lead, how long it might live and even the type of death it will die. We will witness the amazing variety of stars and peer into their secret lives. Narrated by Sir Patrick Stewart of TV's Star Trek: The Next Generation and the X-Men films. Winner of 4 Telly Awards.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default About;