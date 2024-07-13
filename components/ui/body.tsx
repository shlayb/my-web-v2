import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

function BodyPage() {
  return (
    <section id="home" className="container mx-auto h-auto max-w-screen-xl gap-0 bg-gray-100 font-Poppins dark:bg-dark ">
      <div className="py-20 flex justify-center align-middle max-lg:mb-5 max-lg:py-16 max-lg:mt-12 max-lg:grid max-lg:gap-0">
        <div className="relative h-72 w-72 rounded-full shadow-2xl  max-lg:mx-auto lg:hidden hover:-translate-y-1 hover:scale-105 duration-500">
          <Image className="rounded-full animate-float object-cover" src="/profile pict.jpg" width={288} height={288} alt="image description" />
        </div>
        <div className="mx-16">
          <p className="mt-16 justify-end text-2xl font-medium text-primary dark:text-light max-lg:mt-10 max-lg:text-center max-lg:text-xl">Hi 👋, my name</p>
          <p id="Sh" className="relative justify-end text-7xl font-semibold text-primary dark:text-light max-lg:text-center max-lg:text-4xl">
            Ayyubi
          </p>
          <p id="al" className="relative mt-3 justify-end text-2xl font-normal text-primary dark:text-light max-lg:text-center max-lg:grid max-lg:justify-center max-lg:text-xl">
            Electrical and <br /> Instrumental Student
          </p>
        </div>
        <div className="relative h-72 w-72 rounded-full shadow-2xl  max-lg:mx-auto max-lg:hidden hover:-translate-y-1 hover:scale-105 duration-500">
          <Image className="rounded-full animate-float object-cover" src="/profile pict.jpg" width={288} height={288} alt="image description" />
        </div>
      </div>
    </section>
  );
}

export default BodyPage;
