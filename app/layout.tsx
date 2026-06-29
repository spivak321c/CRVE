import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { IntroAnimation } from "@/components/intro-animation"

export const metadata: Metadata = {
  title: "CRVE | Creative Agency",
  description: "An independent design and development studio. We build things people actually want to use.",
  generator: "v0.app",
  icons: {
    icon: "/crve.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased">
        <IntroAnimation>{children}</IntroAnimation>
        <Analytics />
      </body>
    </html>
  )
}
