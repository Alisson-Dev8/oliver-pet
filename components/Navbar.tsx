"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = ["Serviços", "Sobre", "Depoimentos", "Contato"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Altera o estilo da navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para criar os IDs de navegação (remove acentos e espaços)
  const getHref = (item: string) =>
    `#${item
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border py-2"
          : "bg-background/80 backdrop-blur-xl py-4"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden">
            {/* Substitua 'logo-icon.png' pelo nome real do arquivo na sua pasta public.
                Se for SVG, a nitidez será ainda melhor.
            */}
            <Image 
              src="/image-olivepet.png" 
              alt="OliverPet Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col -space-y-0.5">
            <span className="font-display text-xl font-bold text-foreground tracking-tight leading-tight">
              OliverPet
            </span>
            <span className="font-display text-[10px] font-bold text-primary uppercase tracking-[0.2em] leading-tight">
              Agroshopping
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={getHref(item)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5567998711818"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20 active:scale-95"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Overlay) */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-8 pt-4 space-y-2 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <a
              key={item}
              href={getHref(item)}
              className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="https://wa.me/5567998711818"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full rounded-xl bg-primary px-5 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20"
              onClick={() => setIsOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}