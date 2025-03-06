import React, { useState } from 'react';

function TextboxComponent() {
  // State to store the input value
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0)
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0)

  // Handle the change in input
  const handleChange = (event) => {
    const newText = event.target.value; // Get the new text from the input
    setText(newText); // Update the text state
    setWordCount(countWords(newText)); // Update word count when the text changes
    setCharacterCount (countCharacters(newText));
    setSentenceCount (countSentences(newText));
  };

  const countCharacters = (text) => {
 return text.length; 
  }

  const countWords = (text) => {
    // Split text by spaces and filter out empty strings (e.g., multiple spaces)
    const words = text.trim().split(/\s+/);
    return words.length === 1 && words[0] === '' ? 0 : words.length;
  };

  const countSentences = (text) => {
    const sentences = text.trim().split(/[.!?]+/).filter(Boolean);
    return sentences.length === 1 && words[0] === '' ? 0 : sentences.length;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 shadow-lg rounded-lg">
   
      <input
        id="textbox"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Start typing here...(or paste your text)"
        style={{width: '600px', height: '200px', fontSize: '20px', textAlign:'center', border: '2px solid'}}
      />
    
      <div className="flex flex-col-3 space-x-4">
      <p className= "max-w-2xl p-4 bg-amber-400 rounded-lg text-2xl"> {characterCount} <br /> Total characters</p>
      <p className= "max-w-2xl p-4 bg-purple-400 rounded-lg text-2xl">{wordCount} <br /> Word Count </p>
      <p className="max-w-2xl p-4 bg-orange-400 rounded-lg text-2xl">{sentenceCount} <br /> Sentence Count </p>
      </div>
    </div>
  );
}

export default TextboxComponent;
