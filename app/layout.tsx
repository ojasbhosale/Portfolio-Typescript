import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ojas Bhosale - Software Developer",
  description:
    "Full-stack developer with expertise in React.js, Node.js, and cloud technologies. Building scalable solutions and enhancing user experiences.",
  keywords: "software developer, full-stack developer, react, node.js, javascript, portfolio",
  authors: [{ name: "Ojas Bhosale" }],
  openGraph: {
    title: "Ojas Bhosale - Software Developer",
    description: "Full-stack developer with expertise in React.js, Node.js, and cloud technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ErrorBoundary>
            {children}
            <Toaster />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
