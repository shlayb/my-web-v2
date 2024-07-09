import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
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
          <span className="font-bold ">Notes</span>
        </Link>
        <span>
          <i className="fa-regular fa-greater-than scale-[75%]"></i>
        </span>
        <Link href={`/Notes/${matkul}`}>
          <span className="font-semibold">{matkul}</span>
        </Link>
        <span>
          <i className="fa-regular fa-greater-than scale-[75%]"></i>
        </span>
        <span className="font-medium">{title}</span>
      </div>
    </>
  );
}
