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
      return result;
    } else {
      const errorText = await response.text();
      return [`Error ${response.status}: ${errorText}`];
    }
  } catch (error) {
    return ["Request failed:" + error];
  }
};
