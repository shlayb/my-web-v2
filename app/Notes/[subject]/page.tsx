import SubNotes from '@/components/ui/subnotes';
import Subjects from '@/app/Notes/_meta.json';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = Subjects.find((post) => post.value === slug);

  return post;
}

async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  return Subjects.map((post) => ({ slug: post.value.split('/') }));
}

export default async function SlugPage({ params }: PostPageProps) {
  generateStaticParams();
  const value = await getPostFromParams(params);
  return (
    <>
      <SubNotes value={value?.value || ''} />
    </>
  );
}
