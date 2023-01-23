import { useEffect, useState } from "react";
import "./App.css";
import emojiData from "./emojiList.json";
import "./index.css";

function App() {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search)
    );
    setData(newData);
  }, [search]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="seach"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        className="input"
      ></input>
      {data.map((emoji) => (
        <h2 key={emoji.title} className="emoji">
          {emoji.title}
          {emoji.symbol}
        </h2>
      ))}
    </div>
  );
}

export default App;
