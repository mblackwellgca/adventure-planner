import React from "react";
import { useState } from "react";

function Destinations(props) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Let's go to ${search}!`);
  };
  const { DataisLoaded, items } = this.state;
  // if (!DataisLoaded) return
  // <div> <h1> Please wait a moment.... </h1> </div>;
  return (
    <div>
      <form className="locations" onSubmit={handleSubmit}>
        <label>
          Search for your next destination:
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <input
          type="submit"
          className="btn btn-lg btn-info m-2"
          id="margin-normal"
          margin="normal"
        />
      </form>
      <div>
        <div>
          {items.map((items) => (
            <div key={items.id}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
