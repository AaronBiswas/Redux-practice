import React from 'react'
import MovieList from './components/MovieList.jsx'
import MovieInput from './components/MovieInput.jsx'
import Posts from './components/Posts.jsx'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <MovieInput />
      <MovieList />
      <Posts />
    </div>
  )
}

export default App