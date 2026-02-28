import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [link, setLink] = useState("");

  async function handleUpload() {
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();
    setLink(window.location.origin + "/script/" + data.id);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Proteção de Script</h1>
      <textarea
        rows="10"
        cols="50"
        placeholder="Cole seu código aqui"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <br /><br />
      <button onClick={handleUpload}>Upload</button>

      {link && (
        <div>
          <p>Seu link:</p>
          <a href={link}>{link}</a>
        </div>
      )}
    </div>
  );
}
