import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleInput(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Dictionary</h1>
          <h3>Search for a word...</h3>
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="search"
              className="form-control"
              defaultValue={props.defaultKeyword}
              onChange={handleInput}
            />
          </form>{" "}
          <Results results={results} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
