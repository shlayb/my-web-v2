import { posts } from '#site/content';
import { notFound } from 'next/navigation';
import Header from '@/components/ui/header';
import { Poppins } from 'next/font/google';
import { BreadcrumbNotes } from '@/components/ui/breadcrumbnotes';
import { Calendar } from 'lucide-react';
import { cn, FormatDate } from '@/lib/utils';
import { MdxComponent } from '@/components/ui/mdx-component';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  if (!post || !post.published) {
    return notFound();
  }
  const slug = params.slug.join('/');

  return (
    <div className={poppins.className}>
      <Header />
      <div className="w-full h-20 bg-light dark:bg-dark"></div>
      <article className="container py-6 prose dark:prose-invert max-w-[75%] mx-auto">
        <BreadcrumbNotes matkul={post.matkul} title={slug} />
        <h1 className="text-4xl font-semibold py-2">{post.title}</h1>
        <h3 className="text-xl font-medium py-1 text-muted-foreground">Mata Kuliah : {post.matkul}</h3>
        <div className="flex justify-between items-center py-1">
          <dl>
            <dt className="sr-only">Oploaded On</dt>
            <dd className="text-sm md:text-base font-semibold flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{FormatDate(post.date)}</time>
            </dd>
          </dl>
        </div>
        <hr className="my-3" />
        <MdxComponent code={post.body} />
      </article>
    </div>
  );
}
