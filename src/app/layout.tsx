import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/sections/footer';
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: 'Maner Law - Professional Legal Solutions',
  description: 'Maner Law offers expert legal solutions across various practice areas. Trust our experienced attorneys to navigate your legal challenges with professionalism and dedication.',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
		<Footer />
        <Toaster />
      </body>
    </html>
  );
}
