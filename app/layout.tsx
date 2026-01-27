import type { Metadata, Viewport } from "next";
import { Afacad, Leckerli_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const leckerliOneFont = Leckerli_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-leckerli',
  display: 'swap'
})

const afacadFont = Afacad({
  weight: ['400'],
  variable: '--font-afacad',
  subsets: ['latin'],
  display: 'swap'
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Wishly - Sua lista de desejos online",
  description: "Crie e compartilhe suas listas de desejos com facilidade.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${afacadFont.className} ${leckerliOneFont.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" toastOptions={{ className: 'font-afacad! text-base!' }} richColors={true} />
      </body>
    </html>
  );
}
