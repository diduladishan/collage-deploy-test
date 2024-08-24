import '../components/homestyle.css'
import Hero from '../assets/hero.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
import Collage from './collage/collage'


const HeroSection = () => {
  return (
    <div className="background-wrapper">
      <Navbar />
      <div className="flex flex-col items-center mt-6 lg:mt-10">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-wide">
    Create more 
    <span className="bg-gradient-to-r from-[#F9E15C] to-[#E68C01] text-transparent bg-clip-text font-bold">
      {" "}
      MEME
    </span>
    {" "}
    in less time!
  </h1>
  <p className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 
  mt-6 sm:mt-8 md:mt-10 
  ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 
  mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12 
  text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
  text-center text-neutral-300">
  Create and share memes instantly with MemeMaster! Choose from templates or upload your own images.
  Perfect for beginners and pros. Start creating and join the meme revolution!
  <footer className="mt-6 sm:mt-8 md:mt-10 border-t border-neutral-700"></footer>
</p>

  <div className="flex flex-col items-center justify-center my-6 sm:my-8 md:my-10 lg:my-12 xl:my-14 sm:flex-row">
    <a 
      href="#" 
      className="bg-gradient-to-r from-[#F9E15C] to-[#E68C01] py-2 px-4 sm:py-2 sm:px-6 mx-2 sm:mx-4 rounded-md text-xs sm:text-sm md:text-base"
    >
      Connect Wallet
    </a>
    <a 
      href="#" 
      className="px-4 py-2 mt-4 sm:mt-0 sm:px-6 text-xs sm:text-sm md:text-base text-center border border-neutral-700 rounded-md"
    >
      Documentation
    </a>
  </div>
        <div className="flex mt-10 justify-center bg-gradient-to-r from-[#F9E15C] to-[#E68C01] max-w-[1280px]  sm:w-[600px] md:w-[780px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1280px] mx-2 my-4">
          <img className="w-1.2 mx-2 my-4" src={Hero} alt="MEME_Generate" />

          
        </div>
      </div>
      
      <Footer />
     
    </div>
  )
}

export default HeroSection
