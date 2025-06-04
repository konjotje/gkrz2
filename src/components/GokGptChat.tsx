import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const initialMessage: Message = {
  role: 'assistant',
  content: "Hé daar! Ik ben Roul Ette, de AI adviseur van Gokkerz.nl ♠️ Klaar voor een bonus-tip, strategie of gewoon een gokbabbel? Zeg het maar, ik help je graag verder! 😊",
};

const GokGptChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/gokgpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { role: 'assistant', content: 'Er ging iets mis. Probeer het later opnieuw! 😅' }]);
    }
    setLoading(false);
  };

  return (
    <div className={clsx(
      'rounded-2xl shadow-glass border border-white/30 glassmorphism backdrop-blur-xl',
      'p-6 flex flex-col min-h-[600px] h-[70vh] bg-gradient-to-br from-white/80 to-gokkerz-green/10',
      'animate-fade-in'
    )}>
      <div className="flex-1 overflow-y-auto mb-4 pr-2 custom-scrollbar">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={clsx(
              'my-2 flex',
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            <div
              className={clsx(
                'max-w-[80%] px-4 py-3 rounded-2xl text-base whitespace-pre-line',
                msg.role === 'user'
                  ? 'bg-gokkerz-green/90 text-white rounded-br-md'
                  : 'bg-white/90 text-gray-900 rounded-bl-md border border-gokkerz-green/20 shadow'
              )}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="my-2 flex justify-start">
            <div className="max-w-[80%] px-4 py-3 rounded-2xl bg-white/90 text-gray-900 rounded-bl-md border border-gokkerz-green/20 shadow animate-pulse">
              Roul Ette typt...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex gap-2 mt-auto">
        <input
          className="flex-1 rounded-xl border border-gokkerz-green/30 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gokkerz-green/40 text-base shadow"
          placeholder="Typ je bericht..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          autoFocus
        />
        <button
          type="submit"
          className="bg-gradient-to-br from-gokkerz-green to-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-200 disabled:opacity-60"
          disabled={loading || !input.trim()}
        >
          Verstuur
        </button>
      </form>
    </div>
  );
};

export default GokGptChat;
