import Image from "next/image";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: "5.0", label: "Nota média" },
  { value: "100%", label: "Satisfação" },
  { value: "24h", label: "Atendimento" },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-card">
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

          {/* Testimonial */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
                Depoimentos
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                O que dizem sobre nós
              </h2>
            </div>

            <div className="relative bg-background rounded-2xl p-8 shadow-card border border-border">
              <Quote size={32} className="text-primary/20 mb-4" />
              <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                &ldquo;A OliverPet Agroshopping transformou a experiência do meu cachorro. Ele que
                tinha medo de banho, agora fica animado quando sabe que vai pra lá.
                O carinho da equipe é impressionante!&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-foreground">
                    MC
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Mariana Costa</p>
                    <p className="text-xs text-muted-foreground">Tutora do Thor 🐕</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>
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
