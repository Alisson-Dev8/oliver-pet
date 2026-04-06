"use client";

import { useState, useEffect } from "react";
import { Menu, X, PawPrint } from "lucide-react";

const navItems = ["Serviços", "Sobre", "Depoimentos", "Contato"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (item: string) =>
    `#${item
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-background/80 backdrop-blur-xl"
      }`}
    >
      <div className="container flex items-center justify-between h-20 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <PawPrint size={22} className="text-primary-foreground" />
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

        {/* Desktop nav */}
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

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/556792491532"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 pb-6 pt-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={getHref(item)}
              className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/5567998711818"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20"
            onClick={() => setIsOpen(false)}
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
}
