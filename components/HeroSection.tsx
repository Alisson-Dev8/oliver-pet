"use client";

import Image from "next/image";
import { ArrowRight, Heart, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/5 blob-shape blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-accent/10 blob-shape blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium">
              <Heart size={14} className="text-accent fill-accent" />
              Cuidado com amor desde 2018
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
              Seu pet merece
              <br />
              <span className="text-gradient">o melhor.</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Clínica veterinária e pet shop com atendimento humanizado. Cuidamos
              do seu melhor amigo como se fosse nosso.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/556792491532"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-warm"
              >
                Agendar agora <ArrowRight size={18} />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                Conhecer serviços
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 pt-2">
              <div>
                <p className="font-display text-3xl font-bold text-foreground">2k+</p>
                <p className="text-xs text-muted-foreground font-medium">Pets felizes</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-foreground">8</p>
                <p className="text-xs text-muted-foreground font-medium">Anos de amor</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-foreground">4.8</p>
                <p className="text-xs text-muted-foreground font-medium">★ Google</p>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Background blob animado */}
              <div className="absolute inset-0 bg-secondary blob-shape scale-110 opacity-50" />

              <Image
                src="/hero-dog.png" // Certifique-se que a imagem existe na pasta public
                alt="Corgi feliz OliverPet"
                width={420}
                height={420}
                className="relative z-10 w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-3xl shadow-card transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />

              {/* Floating card - COM ANIMAÇÃO ULTRA SUAVE */}
              <div 
                className="absolute -bottom-6 -left-8 z-20 bg-background/95 backdrop-blur-md rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 flex items-start gap-4 min-w-[240px] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
                style={{
                  animation: "softFloat 5s ease-in-out infinite"
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-primary" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-sm font-bold text-foreground tracking-tight">Horários de Atendimento</p>
                  <div className="text-[12px] space-y-1">
                    <p className="text-muted-foreground whitespace-nowrap flex justify-between gap-4">
                      <span>Seg - Sex:</span> 
                      <span className="font-bold text-foreground">08:00 - 18:30</span>
                    </p>
                    <p className="text-muted-foreground whitespace-nowrap flex justify-between gap-4">
                      <span>Sábado:</span> 
                      <span className="font-bold text-foreground">08:00 - 13:00</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Injetando o Keyframe da animação suave */}
              <style jsx>{`
                @keyframes softFloat {
                  0%, 100% { transform: translateY(0) translateX(0); }
                  50% { transform: translateY(-12px) translateX(2px); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}