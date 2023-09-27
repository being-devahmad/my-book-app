import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import { BioDataContext } from "../../components/Context";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
  const { state } = useContext(BioDataContext);
  const { id } = useParams();
  const book = state.myData.find((book) => book.id === parseInt(id));
  if (!book) {
    return <div>No record found</div>;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Link to="/books" className="text-black">
          <i class="bi bi-arrow-left fs-1"></i>
        </Link>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-lg-4">
            <div className="p-2">
              <img className="mt-2" src={book.image_url} alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="p-2">
              <h1>Book Name : {book.title}</h1>
              <p>
                <span className="fw-bold">Author</span> : {book.authors}
              </p>
              <p>
                <span className="fw-bold">Genere</span> : {book.format}
              </p>
              <p>
                <span className="fw-bold">Rating</span> : {book.rating}
              </p>
              <p>
                <strong>Edition :</strong> {book.edition}
              </p>
              <p>
                <strong>Review :</strong> {book.review_count}
              </p>
              <p>
                <strong>Description :</strong> {book.description}
              </p>
              <Link to="/cart" className="btn btn-success ">
                <span>Add to Cart</span> <i class="bi bi-cart-check ps-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
