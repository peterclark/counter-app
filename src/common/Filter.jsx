import React from "react";

const Filter = props => {
  const { filters, currentFilter, onFilterChange } = props;

  const classes = filter =>
    filter === currentFilter
      ? "btn btn-outline-dark active"
      : "btn btn-outline-dark";

  return (
    <div className="btn-group btn-group-toggle my-3 d-flex" role="group">
      {filters.map(filter => (
        <button
          key={filter}
          type="button"
          className={classes(filter)}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
