import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section className="meaning-section">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <div className="example">{definition.example}</div>
            </div>
          );
        })}
      </section>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
