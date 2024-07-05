import Image from 'next/image';
import Header from './Header/header';
import BodyPage from './webpage/body';
import TechStack from './webpage/tech';
import ContactFooter from './webpage/contact';
import { Poppins } from 'next/font/google';

interface RootLayoutProps {
  children: React.ReactNode;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home(): JSX.Element {
  return (
    <html className="scroll-smooth">
      <body className={poppins.className}>
        <Header />
        <div className="w-full h-20 bg-light dark:bg-dark"></div>
        <div id="Home">
          <BodyPage />
        </div>
        <div id="Tech">
          <TechStack />
        </div>
        <div id="contact">
          <ContactFooter />
        </div>
      </body>
    </html>
  );
}
