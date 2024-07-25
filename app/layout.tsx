import { Metadata } from 'next';
import Navigation from '../components/navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | NextJS Project',
    default: 'NextJS Project',
  },
  description: 'Practcing NextJS Framework',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
