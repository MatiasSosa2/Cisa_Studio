"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy tu asistente virtual. Pregúntame lo que necesites sobre nuestros servicios de desarrollo web.",
      isBot: true,
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastDismissed, setToastDismissed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mostrar notificación del chatbot a los 5 segundos de cargar la página
  useEffect(() => {
    if (isOpen || toastDismissed) return; // No mostrar toast si el chat está abierto o ya fue descartado

    // Mostrar toast después de 5 segundos de estar en la página
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen, toastDismissed]);

  // Ocultar toast después de 10 segundos si no se interactúa
  useEffect(() => {
    if (showToast && !isOpen) {
      const hideTimer = setTimeout(() => {
        setShowToast(false);
      }, 10000);

      return () => {
        clearTimeout(hideTimer);
      };
    }
  }, [showToast, isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();

      if (data.error) {
        const errorMessage: Message = {
          id: messages.length + 2,
          text: `Error: ${data.error}`,
          isBot: true,
        };
        setMessages(prev => [...prev, errorMessage]);
      } else {
        const botMessage: Message = {
          id: messages.length + 2,
          text: data.response || "No recibí respuesta",
          isBot: true,
        };
        setMessages(prev => [...prev, botMessage]);
      }
    } catch (error) {
      console.error("Error en el chat:", error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Lo siento, hubo un error de conexión. Por favor intenta de nuevo.",
        isBot: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "¡Hola! Soy tu asistente virtual. Pregúntame lo que necesites sobre nuestros servicios de desarrollo web.",
        isBot: true,
      }
    ]);
  };

  const handleToastClick = () => {
    setShowToast(false);
    setToastDismissed(true);
    setIsOpen(true);
    // Agregar mensaje predefinido
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text: "¿Tienes dudas sobre cuál plan elegir? Puedo ayudarte a comparar los planes.",
      isBot: true,
    }]);
  };

  const dismissToast = () => {
    setShowToast(false);
    setToastDismissed(true);
  };

  return (
    <>
      {/* Toast Proactivo */}
      <AnimatePresence>
        {showToast && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 max-w-[320px] bg-[#161616] border border-[#3B82F6]/50 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="relative">
              {/* Botón de cerrar */}
              <button
                onClick={dismissToast}
                className="absolute top-2 right-2 text-[#A1A1AA] hover:text-[#EDEDED] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Contenido del Toast */}
              <button
                onClick={handleToastClick}
                className="w-full p-4 text-left hover:bg-[#0A0A0A] transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 pr-6">
                    <p className="text-[#EDEDED] text-sm font-medium mb-1">
                      ¿Tienes dudas?
                    </p>
                    <p className="text-[#A1A1AA] text-xs">
                      Aquí estoy para ayudarte.
                    </p>
                  </div>
                </div>
                
                {/* Indicador de acción */}
                <div className="mt-3 flex items-center justify-end space-x-2">
                  <span className="text-[#3B82F6] text-xs font-medium">Hablemos →</span>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#3B82F6] text-white p-4 rounded-full shadow-2xl hover:bg-[#2563EB] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={
          showToast && !isOpen
            ? {
                scale: 1,
                x: [0, -8, 8, -8, 8, -4, 4, -2, 2, 0], // Movimiento horizontal tipo sacudida
                y: [0, -6, 6, -6, 6, -3, 3, -1, 1, 0], // Movimiento vertical tipo sacudida
                rotate: [0, -5, 5, -5, 5, -3, 3, -1, 1, 0], // Rotación para más énfasis
              }
            : { scale: 1, x: 0, y: 0, rotate: 0 }
        }
        transition={
          showToast && !isOpen
            ? {
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 2, // Espera 2 segundos entre cada sacudida
                ease: "easeInOut"
              }
            : { type: "spring", stiffness: 260, damping: 20 }
        }
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Ventana de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-[#161616] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#3B82F6] p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#3B82F6] font-bold text-lg">MG</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Asistente Virtual</h3>
                  <p className="text-white/80 text-xs">En línea</p>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="text-white/80 hover:text-white transition-colors"
                title="Reiniciar chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%]`}>
                    <div
                      className={`p-3 rounded-2xl ${
                        message.isBot
                          ? 'bg-[#0A0A0A] text-[#EDEDED] border border-white/10'
                          : 'bg-[#3B82F6] text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#0A0A0A] text-[#EDEDED] border border-white/10 p-3 rounded-2xl">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-[#0A0A0A]">
              <div className="flex items-end space-x-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-[#161616] text-[#EDEDED] placeholder-[#A1A1AA] border border-white/10 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#3B82F6] max-h-32"
                  rows={1}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="bg-[#3B82F6] text-white p-3 rounded-xl hover:bg-[#2563EB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
