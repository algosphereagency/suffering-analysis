import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Suffering Analysis App",
  description: "An app to analyse suffering",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
