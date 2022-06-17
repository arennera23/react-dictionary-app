import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleInput(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
