import CircumIcon from '@klarr-agency/circum-icons-react'

export default function MovieItem({ movie, onDelete }) {
  return (
    <div className='flex bg-bluewhite p-3 text-blueblack'>
      <h3 className='flex-auto'>{movie.name}</h3>
      <button
        onClick={() => onDelete(movie.id)}
        className='hover:cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1}
          stroke='currentColor'
          className='h-6 w-6 text-blueblack'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </button>
    </div>
  )
}
