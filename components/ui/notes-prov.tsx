import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './button';
import { cn, FormatDate } from '@/lib/utils';

interface PropsItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  matkul?: string;
}

export default function PropsItem({ slug, title, description, date, matkul }: PropsItemProps) {
  const filename = slug.replace('Notes/', '');
  return (
    <article className="flex flex-col items-start gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-2xl font-semibold ">
          <Link href={'/Notes/' + matkul + '/' + filename}>{title}</Link>
        </h2>
        <p className="text-sm text-muted-foreground">{matkul}</p>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Oploaded On</dt>
          <dd className="text-sm md:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{FormatDate(date)}</time>
          </dd>
        </dl>
        <Link href={'/Notes/' + matkul + '/' + filename} className={cn(buttonVariants({ variant: 'link' }), 'py-0 text-muted-foreground decoration-muted')}>
          Read More ➜
        </Link>
      </div>
    </article>
  );
}
