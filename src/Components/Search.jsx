import React from "react";
import { Link } from "react-router-dom";
import { Books } from "../Data/Data.js";
import "./Search.css";
export default function Search() {
  return (
    <div>
      <div
        className="searchContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button style={{ position: "absolute", left: "0" }}>
          {" "}
          <Link className="option" to="/">
            Home
          </Link>
        </button>

        <input type="search" />
      </div>
      <div className="bookContainer">
        {Books.map((book) => {
          return (
            <div className="book">
              <img src={book.image} />
              <p>{book.book}</p>
              <p>{book.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
