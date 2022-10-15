import { useState } from 'react'

function Addbtn({ count, onClick }) {
  return (
    <button onClick={onClick} className='p-4 px-8 bg-blue-400 rounded-xl'>
        Adder {count}
    </button>
  )
}

export default function App() {
  const [count, setCount] = useState(0)
  
  function add() {
    setCount(count + 1)
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-5 p-10 border-4 rounded-md shadow-lg border-slate-700 w-[480px] h-screen">
        <Addbtn count={count} onClick={add} />
        <Addbtn count={count} onClick={add} />
      </div>
    </div>
  )
  
}


