import SubNotes from '@/components/ui/subnotes';
import Subjects from '@/app/Notes/_meta.json';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

async function getSubNotesFromParams(params) {
  const subject = params?.subject;
  const subnotes = Subjects.find((subnote) => subnote.value.split('/')[0] === subject);
  return subnotes;
}
async function getStaticPaths() {
  const paths = Subjects.map((subject) => ({
    params: { subject: subject.value.split('/')[0] },
  }));
  return {
    paths,
    fallback: false, // or true/false depending on your use case
  };
}

export default async function SlugPage({ params }) {
  getStaticPaths();
  const value = await getSubNotesFromParams(params);
  return (
    <>
      <SubNotes value={value?.value || ''} />
    </>
  );
}
