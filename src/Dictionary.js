import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }
  let pexelsApiKey = `563492ad6f91700001000001e5d9d7644b8d41d9af96dd0772b23bc8`;
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
  axios
    .get(pexelsApiUrl, { headers: { Authorization: pexelsApiKey } })
    .then(handlePexelsResponse);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleInput(event) {
    setKeyword(event.target.value);
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
              onChange={handleInput}
              defaultValue={props.defaultKeyword}
            />
          </form>{" "}
          <Results results={results} />
        </section>
        <section>
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
