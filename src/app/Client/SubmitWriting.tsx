'use client';

import { useCallback, useContext } from "react";
import { PromptContext } from "./Contexts/PromptFeatures";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  story: string
}

const SubmitWriting = () => {
  const {
    requiredWord,
    genre,
    action,
    name,
    line,
  } = useContext(PromptContext);

  const schema = yup.object().shape({
    story: yup
      .string()
      .required("You must enter a story")
      .test("contains-required-word", `The story must contain the word "${requiredWord}"`, function(value) {
        return value?.includes(requiredWord);
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.story);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Submit your story!</span>
        <textarea
          {...register("story")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.story && (
          <p role="alert" className="mt-2 text-sm text-red-600">
            {errors.story.message}
          </p>
        )}
      </label>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Finished!
        </button>
      </div>
    </form>
  );
}

export default SubmitWriting;