import { useEffect, useState } from "react";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

const initialQuote = {
  text: 'Quote',
  author: 'Author'
}

function App() {
  const [quote, setQuote] = useState(initialQuote)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    updateQuote()
  }, [])

  const updateQuote = async () => {
    try {
      setLoading(true)
      const url = "https://www.breakingbadapi.com/api/quote/random"
      const response = await fetch(url)
      const [newQuote] = await response.json()
      const { quote: text, author } = newQuote
      setQuote({ text, author })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Error getting data:', error)
    }
  }

  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={updateQuote}>Get another</button>
      {loading
        ? <Spinner />
        : <Quote quote={quote} />
      }
    </div>
  );
}

export default App;
