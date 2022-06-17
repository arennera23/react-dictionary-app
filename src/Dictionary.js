import React from "react";
import "./Dictionary.css";
import { useState } from "react";
export default function Dictionary() {
  function search(event) {
    event.preventDefault();
    alert(`Searching for `);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input type="search" className="form-control" />{" "}
      </form>
    </div>
  );
}
