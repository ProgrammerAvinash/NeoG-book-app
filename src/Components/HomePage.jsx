import React from "react";

import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="homepageContainer">
      <header>
        <Link className="option" to="/Search">
          Search
        </Link>
      </header>
      <div className="currentlyReading"></div>
    </div>
  );
}
