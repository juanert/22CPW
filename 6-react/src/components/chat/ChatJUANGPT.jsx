import OpenAI from "openai";
import { useState, useEffect } from "react";

function ChatJUANGPT() {
  // Array para los mensajes del chat
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Maneja el valor del input del chat
  const [input, setInput] = useState("");

  // Configuración de OpenAI
  const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: "",
    dangerouslyAllowBrowser: true,
  });

  // Funcion que se ejecuta al enviar un mensaje
  const sendMessage = async () => {
    //Vacio el textarea
    setInput("");
    // Agregago el mensaje del usuario al array de mensajes
    setMessages([...messages, { role: "user", content: input }]);

    // Aquí llamo a la API de OpenAI para obtener una respuesta
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            "Contesta al siguiente mensaje como si fuera un trabajador de lexpin, organización educativa que da cursos de programación, diseño e inglés. Siempre recomienda nuestros cursos al finalizar el mensaje" +
            input,
        },
      ],
      model: "deepseek-chat",
    });

    // Agrego la respuesta de OpenAI al array de mensajes
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: completion.choices[0].message.content },
    ]);
  };

  return (
    <section className="min-h-screen grid grid-rows-[auto_100px]">
      <div className="p-6 bg-gray-100 bg-gray-600 text-white flex flex-col gap-4 overflow-y-scroll">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              message.role === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 text-black self-start"
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="px-6 py-4 bg-blue-600 text-white flex items-center justify-center">
        <textarea
          name="chat-input"
          id="chat-input"
          className="w-full h-full p-2 border border-gray-300/50 rounded-lg"
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button
          onClick={sendMessage}
          className="h-full px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 rounded-lg cursor-pointer"
        >
          Send
        </button>
      </div>
    </section>
  );
}

export { ChatJUANGPT };
