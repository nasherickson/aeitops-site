import React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'AE iT.OPS',
  description: 'Next.js site with Vercel Analytics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* AE Logo test for debugging */}
        <img
          src="/ae-logo.png"
          alt="AE Logo Test"
          style={{ width: '200px', margin: '1rem auto', display: 'block' }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}