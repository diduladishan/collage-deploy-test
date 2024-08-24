import Hero from "../assets/hero.jpg"
import "../components/homestyle.css"
import Footer from "./Footer"
import Navbar from "./Navbar"

const HeroSection: React.FC = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="mt-6 flex flex-col items-center lg:mt-10">
        <h1 className="text-center text-3xl tracking-wide sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Create more
          <span className="bg-gradient-to-r from-[#F9E15C] to-[#E68C01] bg-clip-text font-bold text-transparent">
            {" "}
            MEME
          </span>{" "}
          in less time!
        </h1>
        <p
          className="ml-4 mr-4 mt-6 max-w-full text-center 
          text-base text-neutral-300 sm:ml-6 
          sm:mr-6 sm:mt-8 sm:max-w-2xl sm:text-lg md:ml-8 
          md:mr-8 md:mt-10 md:max-w-3xl md:text-xl lg:ml-10 
          lg:mr-10 lg:max-w-4xl lg:text-2xl xl:ml-12 xl:mr-12 
          xl:max-w-5xl xl:text-3xl"
        >
          Create and share memes instantly with MemeMaster! Choose from
          templates or upload your own images. Perfect for beginners and pros.
          Start creating and join the meme revolution!
          <footer className="mt-6 border-t border-neutral-700 sm:mt-8 md:mt-10"></footer>
        </p>

        <div className="my-6 flex flex-col items-center justify-center sm:my-8 sm:flex-row md:my-10 lg:my-12 xl:my-14">
          <a
            href="#"
            className="mx-2 rounded-md bg-gradient-to-r from-[#F9E15C] to-[#E68C01] px-4 py-2 text-xs sm:mx-4 sm:px-6 sm:py-2 sm:text-sm md:text-base"
          >
            Connect Wallet
          </a>
          <a
            href="#"
            className="mt-4 rounded-md border border-neutral-700 px-4 py-2 text-center text-xs sm:mt-0 sm:px-6 sm:text-sm md:text-base"
          >
            Documentation
          </a>
        </div>

        <div className="mx-2 my-4 mt-10 flex max-w-[1280px] justify-center bg-gradient-to-r from-[#F9E15C] to-[#E68C01] sm:w-[600px] md:w-[780px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1280px]">
          <img className="w-1.2 mx-2 my-4" src={Hero} alt="MEME_Generate" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HeroSection
