import React, { useState } from "react";

function ContactForm() {
  fetch("http://localhost:3001/endpoint", {
    method: "POST", // or PUT
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John",
      message: "Hello from React!",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
