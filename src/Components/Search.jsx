import React from "react";
import { Link } from "react-router-dom";
import { Books } from "../Data/Data.js";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Search.css";
export default function Search() {
  const { state, dispatch } = useContext(DataContext);
  const handleProductSearch = (e) => {
    dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value });
  };
  const transformData = () => {
    let filteredData = [...Books];

    if (state.searchValue) {
      filteredData = filteredData.filter((product) =>
        product.book.toLowerCase().includes(state.searchValue.toLowerCase())
      );
      return filteredData;
    }
  };

  const handleDropDown = (e) => {
    console.log(e.target.value);
  };

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

        <input type="search" onChange={handleProductSearch} />
      </div>
      <div className="bookContainer">
        {transformData()?.map((book) => {
          return (
            <div className="book">
              <img src={book.image} />
              <p>{book.book}</p>
              <p>{book.author}</p>
              <select onClick={handleDropDown}>
                <option value="currently Reading">currently Reading</option>

                <option value="Want to Read">Want to Read</option>

                <option value="read">read</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}
