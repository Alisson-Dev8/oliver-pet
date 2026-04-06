import { MessageCircle, PawPrint } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container">
        <div className="relative rounded-3xl bg-primary overflow-hidden px-8 py-14 md:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 blob-shape translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 blob-shape -translate-x-10 translate-y-10" />
          <PawPrint
            size={120}
            className="absolute right-10 bottom-8 text-primary-foreground/5 rotate-12"
          />

          <div className="relative max-w-lg">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4">
              Pronto para dar o melhor cuidado ao seu pet?
            </h2>
            <p className="text-primary-foreground/75 leading-relaxed mb-8">
              Agende uma consulta ou banho e tosa agora mesmo. Seu pet vai agradecer!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/556792491532"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-background px-6 py-3.5 text-base font-semibold text-foreground hover:opacity-90 transition-opacity shadow-warm"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
