import { useState } from 'react'

function Addmovie({ addMovie, moviename, setMoviename, fetchMovieName }) {
  function onSubmit(e) {
    e.preventDefault()

    if (moviename == '') {
      alert('type a valid text')
      return
    }
    addMovie({ name: moviename })
    setMoviename('')
  }
  // Api call and setmoviename()
  function fetchMovie(name) {
    fetchMovieName()
    setMoviename(name)
  }

  return (
    <form
      className='flex w-full flex-col gap-3'
      onSubmit={onSubmit}
    >
      <input
        type='text'
        className='flex-auto border-2 p-3'
        placeholder='Movie name..'
        value={moviename}
        onChange={(e) => fetchMovie(e.target.value)}
      />
      <button className='bg-slate-300 p-3 px-8 font-semibold text-slate-600'>
        Add
      </button>
    </form>
  )
}

export default Addmovie
