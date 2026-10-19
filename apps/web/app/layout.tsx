import './globals.css';

export const metadata = {
  title: 'ATS AI Platform',
  description: 'AI-powered ATS for hiring and candidate evaluation.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
