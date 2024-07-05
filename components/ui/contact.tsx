function ContactFooter() {
  return (
    <section id="contact" className=" mx-auto h-full min-w-max justify-center dark:bg-dark bg-light font-Poppins max-lg:h-full max-lg:mt-16">
      <div className="relative grid mx-auto justify-center text-primary max-lg:mx-auto max-lg:mt-0 max-lg:grid">
        <div className="">
          <h1 className=" text-center text-5xl font-semibold text-primary dark:text-light max-lg:my-0 max-lg:mt-10">Contact me</h1>
        </div>
        <div className="w-full my-24 flex max-lg:grid max-lg:grid-cols-3 justify-center">
          <button type="button" className="contactbox">
            <a href="https://www.instagram.com/shlayb/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </button>
          <button type="button" className="contactbox">
            <a href="https://www.linkedin.com/in/sholahudin-al-ayyubi-417972270/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </button>
          <button type="button" className="contactbox">
            <a href="https://github.com/shlayb">
              <i className="fa-brands fa-github"></i>
            </a>
          </button>
          <button type="button" className="contactbox">
            <a href="mailto:sholahudinal.2023@student.uny.ac.id">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </button>
        </div>
      </div>
      <div className="flex justify-normal items-center w-full bg-dark dark:bg-black h-40 ">
        <div className="mx-10">
          <h1 className="text-xl font-medium text-light">
            Made with ❤️ by{' '}
            <a href="/" className="font-bold">
              SHLAYB
            </a>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default ContactFooter;
