function TechStack() {
  return (
    <section id="stack" className="inistack mx-auto h-lvh max-w-screen-xl justify-center bg-light dark:bg-dark font-Poppins max-lg:h-full max-lg:mt-12">
      <div className="relative mx-auto py-20 justify-center text-primary  max-lg:mx-auto max-lg:py-16 max-lg:mt-0 max-lg:grid">
        <h1 className="my-8 text-center text-5xl font-semibold text-primary dark:text-light max-lg:my-0 max-lg:mt-10">Skill Stack</h1>
        <div className="relative m-5 my-10 flex justify-center text-primary dark:text-light max-lg:my-5 max-lg:grid">
          <div className="skillstack">
            <div className="my-10">
              <h1 className="relative my-5 text-center text-7xl font-medium">
                <i className="fa-brands fa-python"></i>
              </h1>
              {/* <!-- <h2 className="text-3xl font-medium relative text-center mt-3">Figma</h2> --> */}
              <div className="mx-4 my-6 h-5 rounded-[5px] bg-gray-300">
                <div className="block h-full w-[70%] rounded-[5px] bg-scndary"></div>
              </div>
              <p className="mx-3 text-center text-sm">I have proficient skills in Python programming, especially for various technical projects.</p>
            </div>
          </div>
          <div className="skillstack">
            <div className="my-10">
              <h1 className="relative my-5 text-center text-7xl font-medium">
                <i className="fa-brands fa-js"></i>
              </h1>
              {/* <!-- <h2 className="text-3xl font-medium relative text-center mt-3">Figma</h2> --> */}
              <div className="mx-4 my-6 h-5 rounded-[5px] bg-gray-300">
                <div className="block h-full w-[40%] rounded-[5px] bg-scndary"></div>
              </div>
              <p className="mx-3 text-center text-sm">I am skilled in JS programming, with a strong focus on developing versatile projects.</p>
            </div>
          </div>
          <div className="skillstack">
            <div className="my-10">
              <h1 className="relative my-5 text-center text-7xl font-medium">
                <i className="fa-brands fa-figma"></i>
              </h1>
              {/* <!-- <h2 className="text-3xl font-medium relative text-center mt-3">Figma</h2> --> */}
              <div className="mx-4 my-6 h-5 rounded-[5px] bg-gray-300">
                <div className="block h-full w-[60%] rounded-[5px] bg-scndary"></div>
              </div>
              <p className="mx-3 text-center text-sm">I have proficient skills in Python programming, especially for various technical projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
