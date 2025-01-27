import { useState, useEffect } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import CardContent from "./components/CardContent";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const newQuote = () => {
    fetchQuote();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 opacity-95">
      <Card id="quote-box" className="max-w-xl p-8 text-center shadow-lg">
        <CardContent>
          <p id="text" className="text-xl font-semibold mb-4">
            "{quote}"
          </p>
          <p id="author" className="text-lg font-light text-gray-700">
            {author}
          </p>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <Button
              id="new-quote"
              onClick={newQuote}
              className="bg-slate-500 text-white"
            >
              Another One
            </Button>
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text =${encodeURIComponent(
                `"${quote}" - ${author}`
              )}`}
              target="_blank"
              rel="noopener no referrrer"
              className="text-slate-500 hover:text-xl hover:text-amber-300 transition"
            >
              Tweet
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
