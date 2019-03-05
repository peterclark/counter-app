import React, { Component } from "react";
// import axios from "axios";
import MovieRow from "./MovieRow";

class Table extends Component {
  render() {
    const { onMovieDeleted, onToggleSeen, handleLike, movies } = this.props;
    const { length: count } = movies;
    if (count === 0) return <p>There are no movies.</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies.</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Seen</th>
              <th>
                <i className="fa fa-trash-o" />
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <MovieRow
                key={movie.id}
                movie={movie}
                onMovieDeleted={onMovieDeleted}
                onToggleSeen={onToggleSeen}
                handleLike={handleLike}
              />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
