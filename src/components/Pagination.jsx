import React from "react";

const Pagination = () => {
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link  text-black" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-black" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-black" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-black" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-black" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
