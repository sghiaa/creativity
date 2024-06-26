import Image from "next/image";
import GeneratePrompt from "./Client/GeneratePrompt";
import SubmitWriting from "./Client/SubmitWriting";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Prompt Generator</h1>
    <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="flex w-full justify-between space-x-4">
        <div className="flex-1 lg:w-1/4 border border-gray-300 bg-gray-200 p-4 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30">
          <GeneratePrompt />
        </div>
        <div className="flex-3 lg:w-3/4 border border-gray-300 bg-gray-200 p-4 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30">
          <SubmitWriting />
        </div>
      </div>
    </div>
  </main>
  );
}
