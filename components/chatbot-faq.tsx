"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  options?: string[];
}

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer: "Los tiempos de desarrollo varían según el proyecto: Landing Page (5-7 días), Sitio Corporativo (15-20 días), E-commerce (25-30 días)."
  },
  {
    question: "¿Incluyen hosting y dominio?",
    answer: "Los precios incluyen el desarrollo del sitio. El hosting y dominio pueden contratarse por separado o podemos asesorarte con las mejores opciones según tu presupuesto."
  },
  {
    question: "¿Hacen modificaciones después de entregado?",
    answer: "Sí, ofrecemos soporte post-entrega. Los cambios menores están incluidos en el período de soporte (varía según el plan). Para cambios mayores podemos coordinar un nuevo presupuesto."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencias bancarias, PayPal, y pagos en criptomonedas. Generalmente trabajamos con 50% de adelanto y 50% a la entrega."
  },
  {
    question: "¿El sitio será responsive (móvil)?",
    answer: "¡Por supuesto! Todos nuestros diseños son 100% responsive, optimizados para verse perfectos en móviles, tablets y computadoras."
  }
];

export default function ChatbotFAQ() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 ¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
      isBot: true,
      options: faqs.map(faq => faq.question)
    }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (question: string) => {
    // Agregar pregunta del usuario
    const userMessage: Message = {
      id: messages.length + 1,
      text: question,
      isBot: false
    };

    // Buscar respuesta
    const faq = faqs.find(f => f.question === question);
    const botMessage: Message = {
      id: messages.length + 2,
      text: faq?.answer || "Lo siento, no tengo una respuesta para eso.",
      isBot: true,
      options: ["¿Otra pregunta?", "Contactar"]
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const handleAction = (action: string) => {
    if (action === "¿Otra pregunta?") {
      const botMessage: Message = {
        id: messages.length + 1,
        text: "¿Qué más te gustaría saber?",
        isBot: true,
        options: faqs.map(faq => faq.question)
      };
      setMessages(prev => [...prev, botMessage]);
    } else if (action === "Contactar") {
      const botMessage: Message = {
        id: messages.length + 1,
        text: "¡Perfecto! Podés contactarnos en la sección de contacto más abajo o escribirnos a hola@cisastudio.com 📧",
        isBot: true
      };
      setMessages(prev => [...prev, botMessage]);
    }
  };

  return (
    <section className="bg-[#161616] py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-4 text-center"
        >
          Preguntas Frecuentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#A1A1AA] mb-12 text-center"
        >
          Chatea con nuestro asistente virtual para resolver tus dudas
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Chat Window */}
          <div className="bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-[#3B82F6] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Asistente Virtual</h3>
                  <p className="text-white/80 text-sm">En línea</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                {isOpen ? "−" : "+"}
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className="max-w-[80%]">
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.isBot
                            ? 'bg-[#161616] border border-white/10 text-[#EDEDED]'
                            : 'bg-[#3B82F6] text-white'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>

                      {/* Options/Buttons */}
                      {message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, i) => (
                            <button
                              key={i}
                              onClick={() => 
                                option.startsWith("¿") && option.includes("?") && !option.includes("Otra")
                                  ? handleOptionClick(option)
                                  : handleAction(option)
                              }
                              className="block w-full text-left px-4 py-2 bg-[#161616] hover:bg-[#3B82F6] text-[#EDEDED] hover:text-white text-sm rounded-xl border border-white/10 transition-all"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Footer */}
            <div className="bg-[#161616] p-4 border-t border-white/10">
              <p className="text-[#A1A1AA] text-xs text-center">
                Selecciona una opción para continuar la conversación
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
