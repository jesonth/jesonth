import React, { Component} from 'react';
import {getMovies} from './services/fakeMovieService.js'
import {getGenres} from './services/fakeGenreService.js'
import Pagination from './common/Pagination.js'
import {paginate} from './utils/Paginate.js'
import ListGroup from './common/ListGroup.js'
import './movie.css'; 
class Movie extends Component{
 
    state = {

        movies :[],
        genres:[],
        currentPage:1,
        pageSize:3
    }

    componentDidMount(){

        const genres = [{name:'All Generes'},...getGenres()]

        this.setState({
          movies: getMovies(),
          //genres: getGenres()
          genres

        })
    }


    handleDelete = (movie) => {
        //console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        //console.log(movies)
        this.setState({ movies : movies})
    }

    handlePageChange = (page) => {
      //console.log(page)
      this.setState({currentPage:page});
    }

    handleGenreSelect = genre =>{
      //console.log(genre)
      this.setState({selectedGenre:genre})
    }


    render(){
        const {length:count} = this.state.movies
        const {pageSize,currentPage,movies:allMovies,selectedGenre} = this.state
        if(count === 0)
            return <p>There is no movies in the database</p>;

        const filtered = selectedGenre && selectedGenre._id
              ? allMovies.filter(m => m.genre._id === selectedGenre._id)
              : allMovies;

        const movies = paginate(filtered,currentPage,pageSize)
        //console.log(movies)

         return(
            <React.Fragment>
        <div className="row">
            <div className="col-3">
            <ListGroup     
            items={this.state.genres}
            onItemSelect = {this.handleGenreSelect}
            selectedItem = {this.state.selectedGenre}
            textProperty = "name"
            valueProperty="_id"
            />
            </div>
            <div className="col">
            <p>Showing {filtered.length} movies in the database</p>
            <table className="table">
            <thead>
    <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Stock</th>
      <th>Rate</th>
    </tr>
  </thead> 
  <tbody>{
     movies.map(movie => (
        
        <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
      </tr>   
        ))   
      }
  
</tbody>
</table>
  <Pagination
     itemsCount = {filtered.length}
     //itemsCount = '1'
     pageSize = {pageSize}
     currentPage = {currentPage}
     onPageChange = {this.handlePageChange}
    />
            </div>
           </div> 
            </React.Fragment>
       
            )
    }

}

export default  Movie;