import type { Metadata, Viewport } from "next";
import { Afacad, Leckerli_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import { ThemeProvider } from "@/providers/nextThemesProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from "next-intl/server";

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


export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${afacadFont.className} ${leckerliOneFont.variable} antialiased dark:bg-gray-950 `}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster position="top-center" toastOptions={{ className: 'font-afacad! text-base!' }} richColors={true} />
        <ScrollToTop />
      </body>
    </html>
  );
}
