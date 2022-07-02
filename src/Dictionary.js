import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleInput(event) {
    setKeyword(event.target.value);
  }
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  let pexelsApiKey = "563492ad6f91700001000001e5d9d7644b8d41d9af96dd0772b23bc8";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
  let header = `Authorization: Bearer ${pexelsApiKey}`;
  axios.get(pexelsApiUrl, { headers: { header } }).then(handlePexelsResponse);

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
          <h3>Search for a word. . . </h3>
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
