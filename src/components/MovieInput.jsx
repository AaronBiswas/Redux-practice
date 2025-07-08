import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";

const MovieInput = () => {
  const [newMovie, setnewMovie] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setnewMovie(e.target.value);
  };

  const handleAddMovie = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
    setnewMovie("");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md flex items-center space-x-2">
      <input
        name="movie"
        type="text"
        placeholder="Enter movie name"
        value={newMovie}
        className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        onClick={handleAddMovie}
      >
        Add Movie
      </button>
    </div>
  );
};

export default MovieInput;
