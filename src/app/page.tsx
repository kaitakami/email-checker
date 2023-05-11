"use client"

import { Suspense, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { checkWords } from "../utils/checkWords";
import { AIcheckEmail } from "@/utils/openaiEmailReview";
import type { iWord } from "../utils/words";

type Inputs = {
  subject: string,
  content: string,
};

interface NegativeWords {
  badWords: iWord[],
  spamWords: string[]
}

export default function Home() {
  const [negativeWords, setNegativeWords] = useState<NegativeWords>();
  const [AIWords, setAIWords] = useState<string[]>([])
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    setNegativeWords({ badWords: [], spamWords: [] })
    setAIWords([])
    const email = `${data.content.toLowerCase()} \n ${data.subject.toLowerCase()}`
    setNegativeWords(checkWords(email))
    const AIResponse = await AIcheckEmail(email)
    setAIWords(AIResponse)
  };
  return (
    <main className="flex flex-col items-center justify-center max-w-6xl min-h-screen p-4 mx-auto gap-7 md:p-20">
      <section className='w-full p-2 py-5 border rounded-lg bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600'>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl font-semibold">Email</h2>
          <input
            placeholder="Subject"
            className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500"
            {...register("subject", { required: true })}
          />
          {errors.content && <span className="block text-sm font-medium text-center text-red-400/80">This field is required</span>}
          <textarea
            placeholder="Content"
            className="block p-2.5 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 focus:ring-zinc-500 focus:border-zinc-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 max-h-96 min-h-[10rem] sm:min-h-[15rem]"
            {...register("content", { required: true })}
          />
          {errors.content && <span className="block text-sm font-medium text-center text-red-400/80">This field is required</span>}
          <button type="submit" className="dark:text-white text-black border border-zinc-300 dark:border-zinc-600 bg-zinc-200 hover:bg-zinc-300 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800 transition-colors">
            Check Email
          </button>
        </form>
      </section>
      <section className='w-full p-2 py-5 border rounded-lg bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600'>
        <h2 className="text-xl font-semibold">Improvements</h2>
        {isSubmitSuccessful && negativeWords ?
          <NegativeWordsList badWords={negativeWords.badWords} spamWords={negativeWords.spamWords} AIWords={AIWords} />
          : <div className="opacity-50">Start writing your email</div>}
      </section>
    </main>
  )
}

interface ListProps extends NegativeWords {
  AIWords: string[]
}

const NegativeWordsList = ({ badWords, spamWords, AIWords }: ListProps) => {
  if (!badWords.length && !spamWords.length) {
    return (
      <><h3>
        Your emails doesn&apos;t seem to have a negative word in our database. Congrats :)
      </h3>
        {!AIWords.length ? <div>The AI doesn&apos;t have a suggestion too</div> :
          <>
            <h3 className="pt-3 text-sm font-semibold">AI suggestions (Beta)</h3>

            <ul className="px-5">
              {AIWords.map(word => (<li className="list-disc" key={word}>
                {word}
              </li>))}
            </ul>
          </>}
      </>

    )
  }
  return (
    <>
      <h3 className="pt-3 text-sm font-semibold">AI suggestions (Beta)</h3>
      {AIWords.length > 0 ? <ul className="px-5">
        {AIWords.map(word => (<li className="list-disc" key={word}>
          {word}
        </li>))}
      </ul> : <div>The AI doesn&apos;t have any recommendation</div>}
      <hr />
      {badWords.length > 0 && (
        <>
          <h3 className="pt-3 text-sm font-semibold">Bad words</h3>
          <ul className="px-5">
            {badWords.map(word => (<li className="list-disc" key={word.word}>
              {word.word}
            </li>))}
          </ul>
        </>
      )}
      {spamWords.length > 0 && (
        <>
          <h3 className="pt-3 text-sm font-semibold">Spam words</h3>
          <ul className="px-5">
            {spamWords.map(word => (<li className="list-disc" key={word}>{word}</li>))}
          </ul>
        </>
      )}
    </>
  )
}
