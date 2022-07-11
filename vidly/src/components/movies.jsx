import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
    constructor() {
        super();
        // this.renderMovies = this.renderMovies.bind(this);
        this.renderMovieTable = this.renderMovieTable.bind(this);
        this.movies = this.movies;
    }

    // Get data from other place
    movies = getMovies();

    state = {
        movies: [], // This empty list is for prevent getting error before we actually get movies
        genres: [], // Same as above but genres
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: "title", order: "asc" },
    };

    componentDidMount() {
        const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
        this.setState({ movies: getMovies(), genres });
    }

    handleDelete = (movieId) => {
        const movies = this.state.movies.filter((movies) => {
            return movies._id !== movieId;
        });
        this.setState({ movies });
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies]; // Copy movies from this.state.movies
        const index = movies.indexOf(movie); // Select the index of movie from the movies list
        movies[index] = { ...movies[index] }; // Use the index to specify the movie we want, and set it to a object which is the movie we want.
        movies[index].liked = !movies[index].liked; // Reverse the value of liked in the movie
        this.setState({ movies }); // Update the state (update the DOM)
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };

    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    };

    renderMovieTable(filtered, pageSize, currentPage, movies, sortColumn) {
        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the database.</p>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }

    render() {
        const { length: count } = this.state.movies;
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            movies: allMovies,
        } = this.state;

        if (count === 0) return <h1>There are no movies in the database.</h1>;

        const filtered =
            selectedGenre && selectedGenre._id
                ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
                : allMovies;

        const sorted = _.orderBy(
            filtered,
            [sortColumn.path],
            [sortColumn.order]
        );

        const movies = paginate(sorted, currentPage, pageSize);

        return (
            <div>
                {this.state.movies.length > 0 &&
                    this.renderMovieTable(
                        filtered,
                        pageSize,
                        currentPage,
                        movies,
                        sortColumn
                    )}
            </div>
        );
    }
}

export default Movies;
