import SubNotes from '@/components/ui/subnotes';
import Subjects from '@/app/Notes/_meta.json';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

interface Subject {
  value: string;
}

interface SubNotesProps {
  params: {
    subject: string;
  };
}

async function getSubNotesFromParams(params: SubNotesProps['params']) {
  const subject = params?.subject;
  const subnotes = (Subjects as Subject[]).find((subnote) => subnote.value.split('/')[0] === subject);
  return subnotes;
}

// export async function generateStaticPaths() {
//   const paths = (Subjects as Subject[]).map((subject) => ({
//     params: { subject: subject.value.split('/')[0] },
//   }));
//   return {
//     paths,
//     fallback: false, // or true/false depending on your use case
//   };
// }

export default async function SlugPage({ params }: SubNotesProps) {
  const value = await getSubNotesFromParams(params);
  return (
    <>
      <SubNotes value={value?.value || ''} />
    </>
  );
}
