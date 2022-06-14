import React, { Component } from 'react';
import { deleteMovie, getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    constructor() {
        super();
        // this.renderMovies = this.renderMovies.bind(this);
        this.renderMovieTable = this.renderMovieTable.bind(this);
    }


    state = {
        movies: getMovies()
    };


    handleDelete = (movieId) => {
        deleteMovie(movieId);
        this.setState({}, () => { });
    }


    // renderMovies() {
    //     return this.state.movies.map((movie) => {
    //         return (
    //             <tr key={movie._id}>
    //                 <td key={movie.title}>{movie.title}</td>
    //                 <td key={movie.genre.name}>{movie.genre.name}</td>
    //                 <td key={movie.numberInStock}>{movie.numberInStock}</td>
    //                 <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
    //                 <td key={`${movie._id} button`}><button onClick={() => this.handleDelete(movie._id)} key={movie._id}>Delete</button></td>
    //             </tr>
    //         );
    //     });
    // }

    renderMovieTable() {
        return (
            <table className='table'>
                <thead>
                    <tr key='head'>
                        <th key='Title'>Title</th>
                        <th key='Genre'>Genre</th>
                        <th key='Stock'>Stock</th>
                        <th key='Rate'>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Here can change with "renderMovies" function, below is away to decrease the statement */}
                    {this.state.movies.map((movie) => {
                        return (
                            <tr key={movie._id}>
                                <td key={movie.title}>{movie.title}</td>
                                <td key={movie.genre.name}>{movie.genre.name}</td>
                                <td key={movie.numberInStock}>{movie.numberInStock}</td>
                                <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
                                <td key={`${movie._id} button`}><button onClick={() => this.handleDelete(movie._id)} key={movie._id}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }


    render() {
        return (
            <div>
                {this.state.movies.length === 0 && <h1>There are no movies in the database.</h1>}
                {this.state.movies.length > 0 && this.renderMovieTable()}
            </div >
        );
    };
}


export default Movies;