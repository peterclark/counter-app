import React from "react";
import PropTypes from "prop-types";

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const numberOfPages = Math.ceil(itemsCount / pageSize);
  const pages = [...Array(numberOfPages).keys()].map(page => page + 1);

  const classes = page =>
    page === currentPage ? "page-item active" : "page-item";

  if (itemsCount <= pageSize) return null;
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li className={classes(page)} key={`pages-${page}`}>
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
