import { Scissors, Bone, Pill, Stethoscope, ShoppingBag, Wheat, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Banho & Tosa",
    description:
      "Estética premium com produtos hipoalergênicos e técnicas de relaxamento para seu pet.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Bone,
    title: "Nutrição",
    description:
      "Planos alimentares personalizados com rações premium e suplementos selecionados.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Pill,
    title: "Farmácia",
    description:
      "Medicamentos em estoque para tratamentos contínuos e atendimentos emergenciais.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Veterinária",
    description:
      "Consultas completas com exames laboratoriais e diagnóstico por imagem de ponta.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: ShoppingBag,
    title: "Acessórios",
    description:
      "Coleiras, roupinhas, brinquedos e tudo mais para o conforto e diversão do seu pet.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Wheat,
    title: "Produtos Agropecuários",
    description:
      "Rações, suplementos, medicamentos e insumos para animais de pequeno e grande porte.",
    color: "bg-accent/10 text-accent",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-md mb-14">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            Serviços
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Tudo que seu pet precisa em um só lugar
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-warm transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center`}
                >
                  <service.icon size={22} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
