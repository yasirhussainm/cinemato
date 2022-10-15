import { useState } from "react";

function Addmovie({ addMovie }) {
  const [moviename, setMoviename] = useState("");
  function onSubmit(e) {
    e.preventDefault();

    addMovie({ name: moviename, });

    setMoviename("");
  }
  return (
    <form className="flex w-full gap-3" onSubmit={onSubmit}>
      <input
        type="text"
        className="flex-auto border-2 p-4"
        placeholder="Movie name.."
        value={moviename}
        onChange={(e) => setMoviename(e.target.value)}
      />
      <button className="bg-slate-300 p-4 px-8 font-semibold text-slate-600">
        Add
      </button>
    </form>
  );
}

export default Addmovie;
