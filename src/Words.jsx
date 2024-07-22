import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(api_key);

function Words({title,list,setList }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWords = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Give me a list of words that can be used to create a poem for the: "${title}".
                      Just Give top 15 most relevant words as output separated by commas,all starting
                     from lowercase letter and dont repeat words.Some of the words may rhyme with each other`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      const words = text.split(/\n|,|\s+/).filter(word => word.trim());
      setList(words);
    } catch (error) {
      console.error("Operation Failed due to", error);
      setError('Failed to fetch rhyming words');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (title) {
      fetchWords();
    }
  }, [title]);

  return (
    <section>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      <div  className="suggestions">
        {list.length>0 ? (
          list.map((word,index) => (
            <div key={index} className="words">{word}</div>
          ))
        ):(
          !loading && <span>No suggestions available!</span>
        )}
      </div>
    </section>
  );
}

export default Words;
