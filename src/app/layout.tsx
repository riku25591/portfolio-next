import './scss/App.scss';

import Header from './modules/Header';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    template: '%s | Maxime Louf',
    default: 'Maxime Louf',
  },
  description: 'Portfolio professionnel de Maxime Louf, développeur Front-End polyvalent, réalisé avec Next.js',
  icons: {
    icon: 'favicon.ico',
    shortcut: 'android-chrome-256x256.png',
    apple: 'apple-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: 'apple-touch-icon.png',
    },
  },
  manifest: 'https://www.maxime-louf.fr/manifest.json',
}

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div id="document" className="o-document">
          <Header />
          {children}
          <footer role="contentinfo">
              <p>Réalisé avec <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a></p>
          </footer>
        </div>
      </body>
    </html>
  );
}

export default Layout;