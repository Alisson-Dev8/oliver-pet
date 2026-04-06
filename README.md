# Pet Shop MY Agropet — Next.js

Site do Pet Shop MY Agropet convertido de Vite/React para **Next.js 14** com App Router, seguindo a mesma estrutura do projeto Ethereal Dental.

## 🚀 Como rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000)

### 3. Build para produção
```bash
npm run build
npm run start
```

---

## 📁 Estrutura do projeto

```
my-agropet/
├── app/
│   ├── globals.css          # Estilos globais, variáveis CSS e utilitários
│   ├── layout.tsx           # Layout raiz com metadados SEO
│   ├── page.tsx             # Página principal (/)
│   └── not-found.tsx        # Página 404 personalizada
├── components/
│   ├── Navbar.tsx           # Navegação fixa com menu mobile e scroll
│   ├── HeroSection.tsx      # Seção hero com imagem e badges
│   ├── ServicesSection.tsx  # Grid de serviços (6 cards)
│   ├── TestimonialsSection.tsx # Depoimentos + ilustração + stats
│   ├── CTASection.tsx       # CTA com link para WhatsApp
│   └── Footer.tsx           # Rodapé com navegação e contato
├── public/
│   ├── hero-dog.png         # Imagem do hero
│   ├── pets-illustration.png # Ilustração de depoimentos
│   └── vet-professional.png  # Imagem veterinária
├── tailwind.config.ts       # Cores, fontes, animações e plugin
├── next.config.js
└── package.json
```

## 🎨 Design System

| Token | Valor |
|---|---|
| Cor primária | Verde `hsl(155 60% 32%)` |
| Cor accent | Laranja `hsl(25 85% 58%)` |
| Fonte display | Outfit (títulos) |
| Fonte sans | Space Grotesk (corpo) |
| Radius | 1rem |

**Utilitários CSS customizados:**
- `.text-gradient` — gradiente de texto verde
- `.blob-shape` — forma orgânica para decorações
- `.shadow-warm` — sombra laranja suave
- `.shadow-card` — sombra sutil para cards

## ☁️ Deploy

### Vercel (recomendado)
```bash
npx vercel
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```
