
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-foreground py-14">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 group">
              {/* O container precisa de 'relative' para o Image fill funcionar */}
              <div className="relative w-10 h-10 rounded-xl bg-primary overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src="/image-olivepet.png"
                  alt="OliverPet Logo"
                  fill // Faz a imagem ocupar todo o espaço da div
                  className="object-cover" // Garante que preencha sem sobrar espaços brancos
                />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <span className="font-display text-xl font-bold text-white tracking-tight leading-tight">
                  OliverPet
                </span>
                <span className="font-display text-[10px] font-bold text-primary uppercase tracking-[0.2em] leading-tight">
                  Agroshopping
                </span>
              </div>
            </div>
            <p className="text-sm text-background/50 leading-relaxed">
              Excelência em cuidados veterinários e estética animal desde 2018.
            </p>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-semibold text-background text-sm mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2.5 text-sm text-background/50">
              <li>Seg a Sex: <span className="text-background/70">8h às 18:30h</span></li>
              <li>Sábado: <span className="text-background/70">8h às 13h</span></li>
              <li>Domingos: <span className="text-background/70">Fechado</span></li>
              <li>Feriados: <span className="text-background/70">Consultar</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background text-sm mb-4">Fale Conosco</h4>
            <ul className="space-y-2.5 text-sm text-background/50">
              <li>(067) 3253 1500</li>
              <li>oliverpetagroshopping@gmail.com</li>
              <li>
                Av. Sr. do Bonfim, 1189 - Parque dos Novos Estados, Campo Grande - MS, 79034-250
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-background/30">
          <p>© {new Date().getFullYear()} OliverPet Agroshopping. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-background/60 transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-background/60 transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}