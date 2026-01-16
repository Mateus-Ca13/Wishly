import type { Metadata } from "next";
import { Afacad, Leckerli_One } from "next/font/google";
import "./globals.css";

const leckerliOneFont = Leckerli_One({
  weight: ['400'],
  subsets: ['latin'], 
  variable: '--font-leckerli',
  display: 'swap'
})

const afacadFont = Afacad({
  weight: ['400'],
  subsets: ['latin'], 
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Wishly - Sua lista de desejos online",
  description: "Crie e compartilhe suas listas de desejos com facilidade." ,
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${afacadFont.className} ${leckerliOneFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
