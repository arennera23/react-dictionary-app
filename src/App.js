import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="wolf" />
      </div>
      <footer className="text-center">Coded by Aren Langeg</footer>
    </div>
  );
}
