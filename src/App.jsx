import { useState } from 'react'
import Addmovie from './components/Addmovie'
import MovieList from './components/MovieList'

export default function App() {
  const [movies, setMovies] = useState([
    { name: 'Se7ev', id: 1 },
    { name: 'Burning', id: 2 },
    { name: 'Fargo', id: 3 },
    { name: '12 Angry Men', id: 4 },
  ])
  const [moviename, setMoviename] = useState('')
  function onAdd(movie) {
    const id = Math.floor(Math.random() * 100) + 1
    const newMovie = { id, ...movie }
    setMovies([...movies, newMovie])
  }
  function deleteTask(id) {
    setMovies(movies.filter((movie) => movie.id !== id))
  }
  async function fetchMovieName() {
    const apiKey = 'c4f37480acff89d917f6698d081af9a0'
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=true&query=${moviename}`
    )
    const data = await res.json()
    const titles = []
    data.results.forEach((result) => {
      titles.push(result.title)
    })
    console.log(titles)
  }
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-blueblack'>
      <div className='flex w-[480px] flex-col items-center gap-2 p-2'>
        <h1 className='pt-4 text-2xl font-semibold text-bluewhite'>CinemaTo</h1>
        <p className='self-start text-sm italic text-blueash'>
          Create movie watchlist and get recomendations..
        </p>
      </div>
      <div className='flex h-screen w-[480px] flex-col p-2 shadow-lg'>
        {movies.length > 0 ? (
          <MovieList
            movies={movies}
            onDelete={deleteTask}
          />
        ) : (
          <div className='flex-auto'>
            <div className='flex bg-red-200 p-4 font-medium text-red-800'>
              Watch list is empty..
            </div>
          </div>
        )}
        <Addmovie
          addMovie={onAdd}
          moviename={moviename}
          setMoviename={setMoviename}
          fetchMovieName={fetchMovieName}
        />
      </div>
      <div className='mb-4'></div>
    </div>
  )
}
