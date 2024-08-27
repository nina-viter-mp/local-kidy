import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import MuiLocalizationProvider from '@/lib/mui/MuiLocalizationProvider';

const roboto = Roboto({ weight: ['300', '400', '700', '500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          <MuiLocalizationProvider>
            <Header></Header>
            {children}
          </MuiLocalizationProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
