# Wishly

Wishly é uma aplicação web estilo SPA criada em Next.js 16 & Supabase que tem como objetivo principal ser uma plataforma para criação e gerenciamento de listas de desejos entre amigos e familiares.

## Tecnologias Utilizadas

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* ShadCN/ui
* Node.js
* Zod 
* React Hook Form
* Supabase
* Framer motion
* Slugify
* Nanoid
* Next-themes
* Next-intl

## Funcionalidades

- Sistema de autenticação de usuários via Supabase.
- Criação e gerenciamento de listas de desejos.
- Compartilhamento de listas com amigos e familiares.
- Sistema de reserva de presentes para amigos.
- Interface intuitiva e responsiva.
- Convite para salas/grupos.

## Como rodar o projeto

1. Clone o repositório do GitHub:
   ```bash
   git clone https://github.com/Mateus-Ca13/Wishly.git
   ```
   
2. Navegue até o diretório do projeto:
   ```bash
   cd wishly
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
4. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente do Supabase:
   ```
   NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_supabase
   SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key_supabase
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
