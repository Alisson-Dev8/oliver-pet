import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OliverPet Agroshopping | Clínica Veterinária em Campo Grande - MS",
  description:
    "Clínica veterinária e pet shop com atendimento humanizado em Campo Grande - MS. Banho e tosa, consultas, farmácia, nutrição e muito mais. Cuidamos do seu pet como se fosse nosso.",
  keywords: [
    "pet shop",
    "clínica veterinária",
    "banho e tosa",
    "Campo Grande",
    "MS",
    "MY Agropet",
    "cuidados pet",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
