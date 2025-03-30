const Hero = () => {

  return (
    <> 
      <div
        className="relative flex items-center justify-end scale-x-[-1] min-h-screen bg-cover bg-center p-4 md:p-8"
        style={{ backgroundImage: "url('hero section.jpeg')" }}>
        <div className="relative scale-x-[-1] flex flex-col items-start justify-center min-h-screen bg-cover bg-center p-4 md:p-8">
          <div className="text-center">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white-600">
              <span className="text-cyan-500 underline">Artificial{" "}
              </span><span className="text-blue-300">Intelligence</span>
              <br />
              <span className="text-blue-300">& Cognitive Science</span><br className="hidden sm:block" />
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 md:mt-6">
              <button className="py-2 px-4 md:px-6 bg-cyan-500 text-white font-bold text-sm md:text-base rounded-xl drop-shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer w-full sm:w-auto">
                LOGIN
              </button>
              <button className="py-2 px-4 border border-cyan-500 font-bold md:px-6 text-cyan-700 text-sm md:text-base rounded-xl drop-shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer w-full sm:w-auto">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero