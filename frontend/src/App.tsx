import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I am MindBridge. Ask me anything." },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "This is a placeholder reply 🤖" },
    ]);

    setInput("");
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "30px auto",
        fontFamily: "Arial",
      }}
    >
      <h2>🧠 MindBridge</h2>

      {/* Chat window */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 16,
          height: 450,
          overflowY: "auto",
          background: "#fafafa",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: 12,
              textAlign: msg.role === "user" ? "right" : "left",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: 10,
                background:
                  msg.role === "user" ? "#4f46e5" : "#e5e7eb",
                color: msg.role === "user" ? "#fff" : "#000",
                maxWidth: "80%",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "12px 18px",
            borderRadius: 10,
            cursor: "pointer",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default App;
