// src/app/layout.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Football games',
    template: '%s | Football games'
  },
  description: 'Football live watch website',
  icon: '/favicon.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icon} />
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
