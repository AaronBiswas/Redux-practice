import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers, removeMovie } from "../movieSlice";

const MovieList = () => {
  //useSelector is used for getting state data from the store.
  // useSelector retrieves 'movies' array from 'movies' slice in the Redux store.

  const movies = useSelector((state) => state.movies.movies);
  const users=useSelector((state)=>state.movies.users);
  const dispatch=useDispatch();
   const handleRemoveMovie = (id) => {
        dispatch(removeMovie(id));
    };

    useEffect(()=>{
      dispatch(fetchusers());
    },[dispatch])

  return (
    <div className="bg-blue-200 p-6 rounded shadow-md text-center">
      <h1 className="text-2xl font-semibold text-blue-600 mb-4">Movie List</h1>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-blue-100 text-blue-900 px-4 py-2 rounded mb-2"
        >
          {movie.name} <button
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        onClick={()=>handleRemoveMovie(movie.id)}
      >
        Remove Movie
      </button>
        </div>
      ))}

      {users.map((user,index)=>(
        <div key={index}>
          <h2 className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 gap-2">{user}</h2>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
