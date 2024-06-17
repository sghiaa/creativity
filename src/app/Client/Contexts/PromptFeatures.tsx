'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

interface PromptState {
  requiredWord: string,
  genre: string,
  action: string,
  name: string,
  line: string,
  setRequiredWord: Dispatch<SetStateAction<string>>,
  setGenre: Dispatch<SetStateAction<string>>,
  setAction: Dispatch<SetStateAction<string>>,
  setName: Dispatch<SetStateAction<string>>,
  setLine: Dispatch<SetStateAction<string>>,

}
const defaultState: PromptState = {
  requiredWord: "",
  genre: "",
  action: "",
  name: "",
  line: "",
  setRequiredWord: () => {},
  setGenre: () => {},
  setAction: () => {},
  setName: () => {},
  setLine: () => {},
}
const PromptContext = createContext(defaultState);

interface Props {
  children: ReactNode;
}

const PromptProvider = ({children}: Props) => {
  const [requiredWord, setRequiredWord] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [action, setAction] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [line, setLine] = useState<string>("");

  return (
    <PromptContext.Provider value={{
      requiredWord,
      setRequiredWord,
      genre,
      setGenre,
      action,
      setAction,
      name,
      setName,
      line,
      setLine,
    }}
  >
    {children}
  </PromptContext.Provider>
  )
}

export { PromptProvider, PromptContext };