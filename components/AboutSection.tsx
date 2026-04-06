import { Heart, Clock, MapPin, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Sobre nós</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Cuidando com amor em Campo Grande
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A <span className="font-semibold text-foreground">OliverPet Agroshopping</span> nasceu do amor pelos animais e da vontade de oferecer o melhor atendimento para pets e seus tutores. Localizada no coração de Campo Grande - MS, somos referência em cuidado animal, com uma equipe dedicada e apaixonada.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Oferecemos desde serviços veterinários completos até produtos agropecuários, tudo em um só lugar. Nosso compromisso é tratar cada pet com o carinho que ele merece.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Heart, title: "Amor & Dedicação", desc: "Cada pet é tratado como parte da família" },
              { icon: Clock, title: "Atendimento Ágil", desc: "Horários flexíveis para sua comodidade" },
              { icon: MapPin, title: "Localização", desc: "Fácil acesso no Parque dos Novos Estados" },
              { icon: Users, title: "Equipe Qualificada", desc: "Profissionais experientes e atenciosos" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-warm transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;