import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Demostración de Prácticas",
    description: "Una página de demostración para prácticas educativas",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body className={`${inter.className} bg-repeat bg-[url('/placeholder.svg?height=200&width=200')] dark:bg-[url('/placeholder.svg?height=200&width=200&text=dark')] relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/50 dark:from-background/95 dark:to-background/50 backdrop-blur-[2px]" />
        <div className="relative">
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </div>
        </body>
        </html>
    )
}

