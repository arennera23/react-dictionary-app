import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="wolf" />
        <footer className="text-center">
          Coded by Aren Langeg and open-sourced code on{" "}
          <a
            href="https://github.com/arennera23/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>{" "}
      </div>
    </div>
  );
}
