import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | NextJS Project',
    default: 'NextJS Project',
  },
  description: 'Practcing NextJS Framework',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
