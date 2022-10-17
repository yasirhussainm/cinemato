export default function Popup({ show, recoms }) {
  return (
    <>
      {show && (
        <div className='absolute bottom-0 h-36 w-full overflow-y-scroll bg-blueblack p-1 text-bluewhite'>
          <ul className='border border-bluegray'>
            {recoms.map((recom) => (
              <li className='border-b border-bluegray p-1 px-2 hover:bg-blueash'>
                {recom}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
