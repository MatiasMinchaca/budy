import type { Metadata } from 'next';

import { AuthProvider } from '@/components/auth';
import LoginButton from '@/components/login-button';
import './globals.css';

export const metadata: Metadata = {
  title: 'Budy',
  description: 'Welcome to my app!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white text-black">
        <AuthProvider>
          <header className="flex absolute top-0 left-0 right-0 justify-end p-3 z-20">
            <LoginButton />
          </header>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
