import React, { useContext } from "react";
import { BioDataContext } from "./Context";

const Search = () => {
  const { query, searchBook } = useContext(BioDataContext);

  const handleSearch = () => {
    searchBook(query);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col my-5 p-3 d-flex" style={{ border: "2px solid black" }}>
          <input
            type="email"
            className="form-control form-control-lg "
            id="colFormLabelLg"
            style={{ border: "none", outline: "none" }}
            placeholder="Search books ...."
            value={query}
            onChange={(e) => searchBook(e.target.value)}
          />
          <a href="/">
            <i
              className="bi bi-search text-black fs-2 my-auto"
              onClick={handleSearch}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Search;
