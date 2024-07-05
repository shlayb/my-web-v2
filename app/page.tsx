import Header from '../components/ui/header';
import BodyPage from '../components/ui/body';
import TechStack from '../components/ui/tech';
import ContactFooter from '../components/ui/contact';
import { Poppins } from 'next/font/google';

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
