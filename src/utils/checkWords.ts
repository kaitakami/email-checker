import { badWords } from "./words";
import { spamWords } from "./words";
export function checkWords(email: string) {
  const badWordsIncluded = badWords.filter(({ word }) => email.includes(word));
  const spamWordsIncluded = spamWords.filter((word) => email.includes(word));
  return {
    badWords: badWordsIncluded,
    spamWords: spamWordsIncluded,
  };
}
