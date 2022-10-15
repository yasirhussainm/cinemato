import MovieItem from './MovieItem'

export default function MovieList({ movies, onDelete }) {
  return (
    <div className="flex flex-col gap-2 flex-auto overflow-x-hidden">
        {movies.map((movie) => (
            // <div className="p-2 m-2 bg-slate-200">{movie.name}</div>
            <MovieItem key={movie.id} movie={movie} onDelete={onDelete} />
        ))}
    </div>
  );
}