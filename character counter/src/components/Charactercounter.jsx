import React, { useState } from 'react';

function TextboxComponent() {
  // State to store the input value
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0)
  const [wordCount, setWordCount] = useState(0);

  // Handle the change in input
  const handleChange = (event) => {
    const newText = event.target.value; // Get the new text from the input
    setText(newText); // Update the text state
    setWordCount(countWords(newText)); // Update word count when the text changes
  };

  const countCharacters = (text) => {
 return text.length; 
  }

  const countWords = (text) => {
    // Split text by spaces and filter out empty strings (e.g., multiple spaces)
    const words = text.trim().split(/\s+/);
    return words.length === 1 && words[0] === '' ? 0 : words.length;
  };

  return (
    <div>
       <label htmlFor="textbox">Enter text: </label>
      <input
        id="textbox"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Start typing here...(or paste your text)"
        style={{ width: '650px', height: '200px', fontSize: '16px' }} // Inline style for bigger textbox
      />
      <p>Word Count: {wordCount}</p>
      <p>Character Count: {characterCount}</p>
    </div>
  );
}

export default TextboxComponent;
