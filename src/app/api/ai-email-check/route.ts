import { NextResponse } from "next/server";
import { IncomingMessage } from "http";
const http = require("https");

interface iResult {
  choices: { message: { content: string } }[];
}

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await fetchOPENAI(body.email);
    console.log(response);
    const result = await JSON.parse(response);
    return NextResponse.json({ result });
  } catch {
    return NextResponse.json({ status: "error" });
  }
}

async function fetchOPENAI(content: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const options = {
      method: "POST",
      hostname: "openai80.p.rapidapi.com",
      port: null,
      path: "/chat/completions",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.RAPIDAPI_API_KEY,
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
    };

    const req = http.request(options, function (res: IncomingMessage) {
      const chunks: Buffer[] = [];

      res.on("data", function (chunk: Buffer) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        const body = Buffer.concat(chunks);
        const response = body.toString();
        const result: iResult = JSON.parse(response);
        const content = result.choices[0].message.content;
        resolve(content); // resolve the promise with the content
      });
    });

    req.on("error", function (err: Error) {
      reject(err); // reject the promise with the error
    });

    req.write(
      JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Revisa y retorna un solo array de errores gramaticales, palabras consideradas como spam o negativas en el siguiente email "${content}", retorna en square brackets`,
          },
        ],
      })
    );

    req.end();
  });
}
