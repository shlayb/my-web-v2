import SubNotes from '@/components/ui/subnotes';
import Subjects from '../_meta.json';

interface SubNotesProps {
  params: {
    subject: string;
  };
}

async function getSubNotesFromParams(params: SubNotesProps['params']) {
  const subject = params?.subject; // Update the type of 'slug'
  const subnotes = Subjects.find((subnote) => subnote.value === subject); // Update the type of 'subnotes'

  return subnotes;
}

export async function generateStaticPaths(): Promise<SubNotesProps['params'][]> {
  return Subjects.map((subject) => ({ subject: subject.value.split('/')[0] }));
}

export default async function SlugPage({ params }: SubNotesProps) {
  const value = await getSubNotesFromParams(params);
  return (
    <>
      <SubNotes value={value?.value || ''} />
    </>
  );
}
