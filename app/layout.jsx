// app/layout.jsx
import '../styles/globals.css';

export const metadata = {
  title: 'AE-iT.OPS',
  description: 'Engineering elegant solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}