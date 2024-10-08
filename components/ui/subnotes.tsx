import { Poppins } from 'next/font/google';
import Header from '@/components/ui/header';
import HeroNotes from './herosub';
import { posts } from '#site/content';
import PropsItem from '@/components/ui/notes-prov';
import Footer from '@/components/ui/footer';

interface RootLayoutProps {
  value: string;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function SubNotes({ value }: RootLayoutProps): JSX.Element {
  return (
    <>
      <div className="bodynotes">
        <HeroNotes matkul={value} />
      </div>
      <Footer />
    </>
  );
}
