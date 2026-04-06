import Link from "next/link";
import { PawPrint } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-6">
      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
        <PawPrint size={32} className="text-primary-foreground" />
      </div>
      <div className="text-center space-y-2">
        <h1 className="font-display text-6xl font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">Página não encontrada</p>
        <p className="text-sm text-muted-foreground max-w-xs">
          Ops! Parece que seu pet fugiu por aqui. Esta página não existe.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
