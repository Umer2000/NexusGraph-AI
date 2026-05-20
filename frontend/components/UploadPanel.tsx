"use client";

import { useState } from "react";

import api from "@/services/api";

export default function UploadPanel() {

  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    try {

      setLoading(true);

      await api.post(
        "/upload-document",
        {
          text
        }
      );

      alert("Document processed successfully!");

      setText("");

    } catch (error) {

      console.error(error);

      alert("Upload failed.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-10">

      <h2 className="text-2xl font-semibold mb-5">
        Upload Enterprise Document
      </h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste enterprise logs, reports, tickets, or contracts..."
        className="
          w-full
          h-40
          bg-zinc-950
          border
          border-zinc-800
          rounded-xl
          p-4
          text-white
          resize-none
          outline-none
        "
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="
          mt-4
          bg-white
          text-black
          px-6
          py-3
          rounded-xl
          font-semibold
        "
      >

        {loading
          ? "Processing..."
          : "Analyze Document"}

      </button>

    </div>
  );
}