import { posts } from '#site/content';
import { notFound } from 'next/navigation';
import Header from '@/components/ui/header';
import { Poppins } from 'next/font/google';
import { BreadcrumbNotes } from '@/components/ui/breadcrumbnotes';
import { Calendar } from 'lucide-react';
import { cn, FormatDate } from '@/lib/utils';
import { MdComponent } from '@/components/ui/mdx-component';
import NotFound from '@/components/ui/notfound';
import 'katex/dist/katex.min.css';
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
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  if (!post || !post.published) {
    return (
      <>
        <div className="w-full h-20 bg-light dark:bg-dark"></div>
        <NotFound />
      </>
    );
  }
  const slug = params.slug.join('/');

  return (
    <div className={poppins.className}>
      <article className="py-6 px-8 prose dark:prose-invert max-w-[75%] max-lg:w-[100%] max-lg:px-2 mx-auto max-lg:mx-8">
        <BreadcrumbNotes matkul={post.matkul} title={slug} />
<<<<<<< HEAD
        <h2 className="text-3xl font-semibold my-2">{post.title}</h2>
        <h3 className="text-sm font-medium text-muted-foreground my-1">Mata Kuliah : {post.matkul}</h3>
=======
        <h2 className="text-4xl font-semibold my-2">{post.title}</h2>
        <h3 className="text-base font-medium text-muted-foreground my-0">Mata Kuliah : {post.matkul}</h3>
>>>>>>> 6eed736de4b7aea6c89de1c4c61a7029a23ba43c
        <div className="flex justify-normal items-center">
          <dl className="my-0 ">
            <dt className="sr-only">Oploaded On</dt>
            <dd className="text-xs md:text-base font-semibold flex items-center gap-2 px-0">
              <Calendar className="h-5 w-5" />
              <time dateTime={post.date}>{FormatDate(post.date)}</time>
            </dd>
          </dl>
        </div>
        <hr className="my-5" />
        <MdComponent content={post.body} />
      </article>
    </div>
  );
}
