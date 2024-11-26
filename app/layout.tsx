import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Blog Reflexivo - Práctica Social",
    description: "Reflexiones sobre mi práctica social en fisioterapia",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body
            className={`${inter.className} bg-[url('/images/FondoBlog.jpg')] bg-cover bg-fixed bg-center`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <main className="min-h-screen bg-black/60 text-white">{children}</main>
        </ThemeProvider>
        </body>
        </html>
    );
}
