import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-poppins',
});

interface BreadcrumbNotesProps {
  matkul: string;
  title: string;
}

export function BreadcrumbNotes({ matkul, title }: BreadcrumbNotesProps) {
  return (
    <>
      <div className={(poppins.className, 'flex gap-3 py-2')}>
        <Link href="/Notes">
          <span>Notes</span>
        </Link>
        <span>
          <i className="fa-solid fa-greater-than scale-90"></i>
        </span>
        <Link href={`/Notes/${matkul}`}>
          <span>{matkul}</span>
        </Link>
        <span>
          <i className="fa-solid fa-greater-than scale-90"></i>
        </span>
        <span className="font-medium">{title}</span>
      </div>
    </>
  );
}
