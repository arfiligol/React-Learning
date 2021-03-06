import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
    raiseSort = (path) => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    };

    render() {
        const { movies, onDelete, onLike, onSort } = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => this.raiseSort("title")}>Title</th>
                        <th onClick={() => this.raiseSort("genre.name")}>
                            Genre
                        </th>
                        <th onClick={() => this.raiseSort("numberInStock")}>
                            Stock
                        </th>
                        <th onClick={() => this.raiseSort("dailyRentalRate")}>
                            Rate
                        </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Here can change with "renderMovies" function, below is away to decrease the statement */}
                    {movies.map((movie) => {
                        return (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        onClick={() => onLike(movie)}
                                        liked={movie.liked}
                                    />
                                </td>
                                <td>
                                    <button
                                        onClick={() => onDelete(movie._id)}
                                        key={movie._id}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable;
