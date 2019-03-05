import React, { Component } from "react";

import Header from "./Header";
import Table from "./Table";
import Pagination from "../common/Pagination";
import Filter from "../common/Filter";
import all_movies from "../services/movies";
import all_genres from "../services/genres";
import { paginate } from "../utils/paginate";
import { filter } from "../utils/filter";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: "All"
  };

  componentDidMount() {
    this.setState({ genres: all_genres(), movies: all_movies() });
  }

  handleMovieDeleted = movie => {
    const movies = this.state.movies.filter(m => m.id !== movie.id);
    this.setState({ movies });
  };

  handleMovieAdded = title => {
    const movies = [...this.state.movies];
    movies.push({
      id: title,
      genre: this.state.currentGenre,
      title: title,
      year: 2019
    });
    this.setState({ movies });
  };

  handleToggleSeen = movie => {
    const movies = [...this.state.movies];
    const found = movies.find(m => m.id === movie.id);
    found.seen = !found.seen;
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const found = movies.find(m => m.id === movie.id);
    found.liked = !found.liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = genre => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };
  render() {
    const { movies, genres, pageSize, currentPage, currentGenre } = this.state;
    const filteredMovies = filter(movies, genres, currentGenre);
    const moviePage = paginate(filteredMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <Header onMovieAdded={this.handleMovieAdded} />
        <Filter
          filters={genres}
          currentFilter={currentGenre}
          onFilterChange={this.handleGenreChange}
        />
        <Table
          movies={moviePage}
          onToggleSeen={this.handleToggleSeen}
          handleLike={this.handleLike}
          onMovieDeleted={this.handleMovieDeleted}
        />
        <Pagination
          itemsCount={filteredMovies.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
