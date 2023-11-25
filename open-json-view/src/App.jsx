import { useState } from "react";
import Header from "./components/Header";
import "./styles/App.css";
import { formatHierarchy } from "./controllers/formatHiererchy.js";

function App() {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputOne = formatHierarchy(JSON.parse(input));
    setEdit(inputOne);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const inputOne = formatHierarchy(edit);
    // Concatenate the previous edit array with the new value
    setEdit((prevEdit) => [...prevEdit, ...inputOne]);
  };

  return (
    <div className="Container">
      <Header />

      <div className="description">
        <h3>JSON Formatter and Validator</h3>
        <p>
          Validate and format your JSON string into an object tree highlighted
          by colors for easy identification of JSON keys and values. Break down
          complex code and identify errors in JSON grammar seamlessly with this
          free tool.
        </p>
        <div className="input-border">
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Input JSON"
              type="text"
              value={input}
              onChange={handleInputChange}
            />
            {input && (
              <>
                <button type="submit">Format JSON</button>
                <button
                  type="reset"
                  onClick={() => {
                    setInput("");
                  }}
                >
                  Clear
                </button>
              </>
            )}
          </form>
          {/* Conditionally render the edit textarea */}
          {edit.length > 0 ? (
            <form onSubmit={handleEditSubmit}>
              <textarea
                type="text"
                value={JSON.stringify(edit, null, 2)}
                onChange={(e) => setEdit(JSON.parse(e.target.value))}
              />
              <button>Edit</button>
              <button
                type="reset"
                onClick={() => {
                  setEdit("");
                }}
              >
                Clear
              </button>
            </form>
          ) : (
            <></>
          )}
        </div>
        <footer>
          Made with <span style={{ color: "red" }}>❤️</span> by Daniel Chidebere
          Dev |
          <a href="https://github.com/DanielProgramming56/" target="_blank">
            GitHub
          </a>{" "}
          | &copy; 2023 Daniel Chidebere
        </footer>
      </div>
    </div>
  );
}

export default App;
