"use client";

import { useState } from "react";

import api from "@/services/api";

export default function AIAnalyst() {

  const [question, setQuestion] = useState("");

  const [response, setResponse] = useState("");

  const [loading, setLoading] = useState(false);

  const askAnalyst = async () => {

    if (!question.trim()) {
      return;
    }

    try {

      setLoading(true);

      const result = await api.post(
        "/ask-analyst",
        {
          question,
          context: `
CloudPay outage affected payment APIs.
Support tickets increased 42%.
Checkout failures rising.
Revenue risk detected.
`
        }
      );

      setResponse(result.data.answer);

    } catch (error) {

      console.error(error);

      setResponse(
        "Failed to generate analysis."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-2xl
      p-8
      mb-10
    ">

      <h2 className="text-2xl font-semibold mb-5">
        AI Operations Analyst
      </h2>

      <textarea
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        placeholder="
Ask operational intelligence questions...
"
        className="
          w-full
          h-32
          bg-zinc-950
          border
          border-zinc-800
          rounded-xl
          p-4
          text-white
          resize-none
          outline-none
          mb-4
        "
      />

      <button
        onClick={askAnalyst}
        disabled={loading}
        className="
          bg-white
          text-black
          px-6
          py-3
          rounded-xl
          font-semibold
        "
      >

        {loading
          ? "Analyzing..."
          : "Ask AI Analyst"}

      </button>

      {response && (

        <div className="
          mt-6
          bg-zinc-950
          border
          border-zinc-800
          rounded-xl
          p-5
        ">

          <h3 className="
            text-lg
            font-semibold
            mb-3
          ">
            AI Operational Analysis
          </h3>

          <div className="
            text-zinc-300
            whitespace-pre-wrap
            leading-7
          ">
            {response}
          </div>

        </div>

      )}

    </div>
  );
}