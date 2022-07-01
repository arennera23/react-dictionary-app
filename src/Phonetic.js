import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetics">
      {" "}
      {props.phonetic.text} <a href={props.phonetic.audio}>Listen</a>
    </div>
  );
}
