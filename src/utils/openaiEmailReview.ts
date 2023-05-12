import * as z from "zod";
const arraySchema = z.array(z.string());

export const AIcheckEmail: (email: string) => Promise<string[]> = async (
  email
) => {
  try {
    const response = await fetch("/api/ai-email-check", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    if (response.status === 200) {
      const data = await response.json(); // parse response as JSON
      const result: string[] = await data.result;
      if (arraySchema.parse(result)) {
        return result;
      } else {
        return ["Error: The AI returned an invalid result."];
      }
    } else {
      return [`Error ${response.status}: The API is currently not working :(`];
    }
  } catch (error) {
    return ["Request failed:" + error];
  }
};
