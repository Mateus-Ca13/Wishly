import type { Metadata, Viewport } from "next";
import { Afacad, Leckerli_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import { ThemeProvider } from "@/providers/nextThemesProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { CountryStoreProvider } from "@/providers/CountryStoreProvider";
import { getCountryCode } from "@/utils/server-geo";

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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Wishly",
    },
  };
}


export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const locale = await getLocale();
  const messages = await getMessages();
  const country = await getCountryCode();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${afacadFont.className} ${leckerliOneFont.variable} antialiased dark:bg-gray-950 `}
      >
        <CountryStoreProvider country={country}>
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
        </CountryStoreProvider>
        <Toaster position="top-center" toastOptions={{ className: 'font-afacad! text-base!' }} richColors={true} />
        <ScrollToTop />
      </body>
    </html>
  );
}
