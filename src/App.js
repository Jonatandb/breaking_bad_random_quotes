import { useState } from "react";
import Quote from "./components/Quote";

const initialQuote = {
  text: 'Quote',
  author: 'Author'
}

function App() {
  const [quote, setQuote] = useState(initialQuote)

  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button>Get another</button>
      <Quote quote={quote} />
    </div>
  );
}

export default App;
