import React from 'react';
import Navbar from '../Navbar/Navbar';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 align-items-center my-5" id="homepage" >
            <div class="col-lg-7">

            </div>
            <div class="col-lg-5">
              <h2 class="font-weight-light">Join us for an amazing experience!</h2>
              <p>
                Exposes students to both conceptual and technical aspects of Web
                design and User Experience. Studies the fundamental concepts,
                techniques, practices, work flows, and tools associated with the
                practice of user-experience design in Web interfaces. Additional
                areas of focus include typography, color theory and composition,
                responsive design, CSS3 concepts, basic scripting, and
                JavaScript libraries to create functional, effective, and
                visually appealing websites
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