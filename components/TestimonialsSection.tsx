"use client"; // Necessário para usar hooks como useState e useEffect

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: "4.8", label: "Nota média" },
  { value: "100%", label: "Satisfação" },
  { value: "+1000", label: "Itens em estoque" },
];

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Tutora do Thor 🐕",
    initials: "MC",
    text: "A OliverPet Agroshopping transformou a experiência do meu cachorro. Ele que tinha medo de banho, agora fica animado quando sabe que vai pra lá. O carinho da equipe é impressionante!",
  },
  {
    name: "Ricardo Silva",
    role: "Tutor da Luna 🐈",
    initials: "RS",
    text: "Melhor pet shop da região! Encontro tudo que preciso para minha gatinha e o atendimento no banho e tosa é impecável. Recomendo de olhos fechados.",
  },
  {
    name: "Ana Paula",
    role: "Tutora do Max 🦮",
    initials: "AP",
    text: "O mix de produtos é enorme e os preços são muito justos. Nota-se que os funcionários realmente amam o que fazem e tratam os animais com respeito.",
  },
  {
    name: "Carlos Eduardo",
    role: "Tutor da Mel 🐾",
    initials: "CE",
    text: "Sempre encontro as melhores rações e acessórios. Além disso, o ambiente é super limpo e organizado. É o lugar de confiança para cuidar da minha pequena.",
  },
  {
    name: "Beatriz Oliveira",
    role: "Tutora do Pipoca 🐩",
    initials: "BO",
    text: "O atendimento via WhatsApp é super ágil e a entrega em casa facilita muito a minha rotina. A qualidade do serviço e a atenção aos detalhes são nota 10!",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca automática a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-card overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Illustration */}
          <div className="hidden lg:flex justify-center">
            <Image
              src="/pets-illustration.png"
              alt="Ilustração de cão e gato"
              width={500}
              height={400}
              className="w-full max-w-md"
            />
          </div>

          {/* Testimonial Wrapper */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
                Depoimentos
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                O que dizem sobre nós
              </h2>
            </div>

            {/* Card com transição simples */}
            <div className="relative bg-background rounded-2xl p-8 shadow-card border border-border min-h-[280px] flex flex-col justify-between transition-all duration-500">
              <div>
                <Quote size={32} className="text-primary/20 mb-4" />
                <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
                  &ldquo;{activeTestimonial.text}&rdquo;
                </blockquote>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-foreground">
                    {activeTestimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{activeTestimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{activeTestimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>

            {/* Indicadores (Pontinhos) */}
            <div className="flex gap-2 justify-center lg:justify-start">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/20"
                  }`}
                />
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background rounded-xl p-4 text-center border border-border"
                >
                  <p className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}