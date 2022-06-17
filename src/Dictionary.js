import "./Dictionary.css";
import { useState } from "react";
export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleInput(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input
          type="search"
          className="form-control"
          placeholder="Search for a word..."
          onChange={handleInput}
        />{" "}
      </form>
    </div>
  );
}
