const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd47181…
const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" }
];

export function getGenres() {
  return genres.filter(g => g);
}
import React from 'react'

const ListGroup = (props) => {

  const {items,valueProperty,textProperty,onItemSelect,selectedItem} = props;

  return (
      <ul className="list-group">
      {items.map(item => (
           <li onClick={() =>onItemSelect(item)} key={item[valueProperty]} 
      className={item === selectedItem ? "list-group-item active" : "list-group-item"}
      >
          {item[textProperty]}
      </li>
      ))}
  </ul>
  
  );
    
}

ListGroup.defaultProps = {
  textProperty:'name',
  valueProperty:'_id'
}


export default ListGroup