import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js on Deno',
  description: 'Deploy your Next.js application to Deno Deploy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
