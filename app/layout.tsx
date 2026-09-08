import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://www.kins-west.co.uk'),
  title: { default: 'Kins West Trading | B2B Trade, Warehousing & Logistics', template: '%s | Kins West Trading' },
  description: 'UK-registered B2B trading and logistics company supplying furniture, lighting, audio, medical and pool equipment. Own EU warehouses, transport and project documentation.',
  robots: { index: true, follow: true }, icons: { icon: '/icon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
