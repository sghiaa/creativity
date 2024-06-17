'use client';

import { generate } from "random-words";
import { useEffect, useState } from "react";
import { ACTIONS, GENRES, LINES, NAMES } from "../Helpers/constants";

const GeneratePrompt = () => {
  const [requiredWord, setRequiredWord] = useState<string>();
  const [genre, setGenre] = useState<string>();
  const [action, setAction] = useState<string>();
  const [name, setName] = useState<string>();
  const [line, setLine] = useState<string>();
  
  useEffect(() => {
    const ws = generate(5);
    setRequiredWord(ws[4]); // theres no reason to use the last word, this is just a hack to ensure the type is string rather than string | string[] 
    setGenre(GENRES[(Math.floor(Math.random() * GENRES.length)) % GENRES.length])
    setAction(ACTIONS[(Math.floor(Math.random() * ACTIONS.length)) % ACTIONS.length])
    setName(NAMES[(Math.floor(Math.random() * NAMES.length)) % NAMES.length])
    setLine(LINES[(Math.floor(Math.random() * LINES.length)) % LINES.length])
  }, []);

  return (
    <ul>
      <li className="w-full">
        Genre: {genre}
      </li>
      <li className="w-full">
        Required Word: {requiredWord}
      </li>
      <li className="w-full">
        Action: {action}
      </li>
      <li className="w-full">
        Name: {name}
      </li>
      <li className="w-full">
        Line: {line}
      </li>
    </ul>
  )
}

export default GeneratePrompt;