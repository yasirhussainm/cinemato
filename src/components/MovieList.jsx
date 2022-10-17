import MovieItem from './MovieItem'
import Popup from './Popup'

export default function MovieList({ movies, onDelete }) {
  return (
    <div className='relative flex flex-auto flex-col gap-2 overflow-x-hidden'>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
        />
      ))}
      <Popup
        show={true}
        recoms={[1, 2, 2, 3, 4, 5, 5]}
      />
    </div>
  )
}
