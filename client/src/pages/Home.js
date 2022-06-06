import React from 'react';
import Auth from "../utils/auth";
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
      <p>if not logged in</p>

      </>
    )
  }
</div>
)}

export default Home;
