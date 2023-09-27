import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import { BioDataContext } from "../../components/Context";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

const Books = () => {
  const { state } = useContext(BioDataContext);
  return (
    <>
      <Navbar />
      <Search />
      <Pagination />
      <div className="container">
        <div className="row">
          {state.myData.map((val) => {
            const { id, image_url, title, authors, format, rating } = val;
            return (
              <div className="col-lg-4 col-md-6 p-3" key={id}>
                <div className="card shadow-lg rounded-3">
                  <img src={image_url} alt="..." />
                  <div className="card-body border">
                    <h4 className="card-title fw-bold">{title}</h4>
                    <p className="card-text">
                      <span className="fw-bold">Author</span> : {authors}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Genere</span> : {format}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Rating</span> : {rating}
                    </p>
                    <Link className="btn btn-primary" to={`/book/${id}`}>
                      Click for more details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Books;
