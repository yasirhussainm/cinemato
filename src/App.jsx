import { useState } from "react";
import Addmovie from "./components/Addmovie";
import MovieList from "./components/MovieList";

export default function App() {
  const [movies, setMovies] = useState([
    { name: "Se7ev", id: 1 },
    { name: "Burning", id: 2 },
    { name: "Fargo", id: 3 },
    { name: "12 Angry Men", id: 4 },
  ]);

  function onAdd(movie) {
    const id = Math.floor(Math.random() * 100) + 1
    const newMovie = {id, ...movie}
    setMovies([...movies, newMovie])
  }
  function deleteTask(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex h-screen w-[480px] flex-col border-4 border-slate-700 p-2 shadow-lg">
        {movies.length > 0 ? (
          <MovieList movies={movies} onDelete={deleteTask} />
        ) : (
          <div className="flex-auto">Watch list is empty..</div>
        )}
        <Addmovie addMovie={onAdd} />
      </div>
    </div>
  );
}