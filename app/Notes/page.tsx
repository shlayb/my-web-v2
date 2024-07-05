import { Poppins } from 'next/font/google';
import Header from '../../components/ui/header';
import HeroNotes from './hero';
import { posts } from '#site/content';
import PropsItem from '@/components/ui/notes-prov';
import Footer from '@/components/ui/footer';

interface RootLayoutProps {
  children: React.ReactNode;
  value: string;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function MyFunction(): JSX.Element {
  const displayPosts = posts;
  // akses variable value pada hero.tsx

  return (
    <html>
      <body>
        <Header />
        <div className="bodynotes">
          <div className="w-full h-20"></div>
          <HeroNotes />
        </div>
        <Footer />
      </body>
    </html>
  );
}
