import React, { Component } from "react";
import Like from "./Like";

class MovieRow extends Component {
  seenButton() {
    const { movie, onToggleSeen } = this.props;
    if (movie.seen) {
      return (
        <button
          className="btn btn-outline-success btn-sm"
          onClick={() => onToggleSeen(movie)}
        >
          <i className="fa fa-fw fa-check" />
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => onToggleSeen(movie)}
        >
          <i className="fa fa-fw fa-times" />
        </button>
      );
    }
  }
  render() {
    const { movie, onMovieDeleted, handleLike } = this.props;
    return (
      <tr>
        <td>
          <Like liked={movie.liked} onClick={() => handleLike(movie)} />
        </td>
        <td>{movie.title}</td>
        <td>{movie.genre}</td>
        <td>{movie.year}</td>
        <td>{this.seenButton()}</td>
        <td>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onMovieDeleted(movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default MovieRow;
