import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/ThemeProvider';

const anthropicSherif = localFont({
  src: [
    {
      path: '../fonts/AnthropicSherif.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/AnthropicSherif.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-anthropic-sherif',
  display: 'swap',
});

const copernicusCond = localFont({
  src: '../fonts/CopernicusCond.otf',
  variable: '--font-copernicus-cond',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ney',
  description: 'Personal portfolio of Ney - Developer & Creator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${anthropicSherif.variable} ${copernicusCond.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
