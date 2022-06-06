import React from 'react';
import Auth from "../utils/auth";

=======
import "../assets/css/home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
     {Auth.loggedIn() ? (
      <>

      <p>if logged in</p>
      <Link className="" to="/Destinations">
                Plan my next trip!
      </Link>


      </>
      ) : (
      <>

      <p>
        
      </p>
      
      <p>
      Planning a getaway with family or friends and looking for a trip planner app to help you figure out the logistics? 
      There are endless details that go into planning a group trip. Coordinating flights, arranging transportation, planning for meals, scheduling activities and figuring out accommodation can feel like impossible tasks when a lot of people are involved.
      </p>

      <p>
      Boldly go somewhere you have not gone before!
      </p>

      <p>Please <Link className=" " to="/login">
                Log in&nbsp;
              </Link> 
                or  <Link className=" " to="/signup">
                Sign up&nbsp;
              </Link>
                to begin!
      </p>
    
      </>
    )
  }
</div>
)}
export default Home;