import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <strong>Definition:</strong>
                  {definition.definition}
                  <br />
                  <br />
                  <Synonyms synonyms={definition.synonyms} />
                </div>
                <div className="col-6">
                  <div>
                    Example:
                    {definition.example}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
