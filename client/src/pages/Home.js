import React from 'react';
import Auth from "../utils/auth";
import "../assets/css/home.css";
import Logo from '../../src/assets/images/aleksandra-boguslawska-MS7KD9Ti7FQ-unsplash.jpg';


import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
     {Auth.loggedIn() ? (
      <>

      <p>
      <Link className="" to="/Destinations">
                Plan my next trip!
      </Link>

      </p>
      <div className = "trips">
        <h1>Or choose one of your saved trips</h1>
        <div>
          
        </div>
      </div>

      </>
      ) : (
      <>

      <p>
        
      </p>
      
      <p className='message'>
      Planning a getaway with family or friends and looking for a trip planner app to help you figure out the logistics? 
      There are endless details that go into planning a group trip. Coordinating flights, arranging transportation, planning for meals, scheduling activities and figuring out accommodation can feel like impossible tasks when a lot of people are involved.
      </p>

      <img className="boardwalk" src={Logo} alt="boardwalk" />;

      <p className='bold'>
      Boldly go somewhere you have not gone before!
      </p>

      <p className='credentials'>Please&nbsp; <Link className=" " to="/login">
                Log in&nbsp;
              </Link> 
                or&nbsp;  <Link className=" " to="/signup">
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