import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies(),
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter((movies) => {
            return movies._id !== movie._id;
        });
        this.setState({ movies });
    };

    render() {
        if (this.state.movies.length === 0) {
            return <p>There are no movies in the database.</p>;
        }

        return (
            <React.Fragment>
                {/* <p>Showing {props.count} movies in the database.</p> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Cenre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie) => (
                            <tr key={movie._id}>
                                <td key={movie.title}>{movie.title}</td>
                                <td key={movie.genre.name}>
                                    {movie.genre.name}
                                </td>
                                <td key={movie.numberInStock}>
                                    {movie.numberInStock}
                                </td>
                                <td key={movie.dailyRentaRate}>
                                    {movie.dailyRentaRate}
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.handleDelete(movie)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;
