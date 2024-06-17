'use client';

import { generate } from "random-words";
import { useContext, useEffect } from "react";
import { ACTIONS, GENRES, LINES, NAMES } from "../Helpers/constants";
import { PromptContext } from "./Contexts/PromptFeatures";

const GeneratePrompt = () => {
  const {
    requiredWord, setRequiredWord,
    genre, setGenre,
    action, setAction,
    name, setName,
    line, setLine,
  } = useContext(PromptContext);
  
  useEffect(() => {
    const ws = generate(5);
    setRequiredWord(ws[4]); // theres no reason to use the last word, this is just a hack to ensure the type is string rather than string | string[] 
    setGenre(GENRES[(Math.floor(Math.random() * GENRES.length)) % GENRES.length])
    setAction(ACTIONS[(Math.floor(Math.random() * ACTIONS.length)) % ACTIONS.length])
    setName(NAMES[(Math.floor(Math.random() * NAMES.length)) % NAMES.length])
    setLine(LINES[(Math.floor(Math.random() * LINES.length)) % LINES.length])
  }, [setRequiredWord, setGenre, setAction, setName, setLine]);

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