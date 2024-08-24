import image8 from "../../assets/5.png"
import image1 from "../../assets/image01.png"
import image2 from "../../assets/image02.png"
import image3 from "../../assets/image03.png"
import image4 from "../../assets/image04.png"
import image5 from "../../assets/image05.png"
import image6 from "../../assets/image06.png"
import image7 from "../../assets/image07.png"
import Footer from "../Footer"
import Navbar from "../Navbar"
// import { Link } from "react-router-dom"
import Collage from "../collage/collage"
// import element from "../../assets/sidebar/Apps.png"
// import sounds from "../../assets/sidebar/Audio.png"
// import crop from "../../assets/sidebar/Crop.png"
// import help from "../../assets/sidebar/Help.png"
// import image from "../../assets/sidebar/Image File.png"
// import media from "../../assets/sidebar/Import.png"
// import layers from "../../assets/sidebar/Layers.png"
// import text from "../../assets/sidebar/Lowercase (1).png"
// import more from "../../assets/sidebar/More.png"
// import template from "../../assets/sidebar/Prototype.png"
// import TextIcon from "../../assets/textEditor/Lowercase.png"
//////////////////////////
// import logo123 from "../../assets/textEditor/collage-pic.png"
import ColorPicker from "./ColorPicker"
import FontSelector from "./FontSelector"
import FontSizeSelector from "./FontSizeSelector"
import ImageSelector from "./ImageSelector"
import TextEditor from "./TextEditor"
import "./memeEditor.css"
import html2canvas from "html2canvas"
import React, { useState, useRef, useEffect } from "react"
import Draggable from "react-draggable"
import { MdDownloadForOffline, MdImage } from "react-icons/md"

const images = [image1, image2, image3, image4, image5, image6, image7, image8]

const MemeEditor = () => {
  const [texts, setTexts] = useState([])
  const [selectedTextId, setSelectedTextId] = useState(null)
  const [currentColor, setCurrentColor] = useState("#ffffff")
  const [selectedImage, setSelectedImage] = useState(null)
  const memeRef = useRef(null)

  useEffect(() => {
    if (texts.length === 0) {
      handleAddText()
    }
  }, [texts])

  const handleTextChange = (e) => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, text: e.target.value } : text,
    )
    setTexts(newTexts)
  }

  const handleColorChange = (color) => {
    setCurrentColor(color.hex)
    const newTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, color: color.hex } : text,
    )
    setTexts(newTexts)
  }

  const handleFontChange = (e) => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? { ...text, fontStyle: e.target.value }
        : text,
    )
    setTexts(newTexts)
  }

  const handleFontSizeChange = (e) => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? { ...text, fontSize: parseInt(e.target.value, 10) }
        : text,
    )
    setTexts(newTexts)
  }

  const handleToggleBold = () => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? {
            ...text,
            fontWeight: text.fontWeight === "bold" ? "normal" : "bold",
          }
        : text,
    )
    setTexts(newTexts)
  }

  const handleToggleItalic = () => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? {
            ...text,
            fontStyle: text.fontStyle === "italic" ? "normal" : "italic",
          }
        : text,
    )
    setTexts(newTexts)
  }

  const handleToggleUnderline = () => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? {
            ...text,
            textDecoration:
              text.textDecoration === "underline" ? "none" : "underline",
          }
        : text,
    )
    setTexts(newTexts)
  }

  const handleAddText = () => {
    if (texts.length < 4) {
      const newId = texts.length + 1
      const newY =
        texts.length === 0
          ? 100
          : texts[texts.length - 1].y + texts[texts.length - 1].fontSize + 10
      setTexts([
        ...texts,
        {
          id: newId,
          text: "",
          x: 100,
          y: newY,
          color: currentColor,
          fontStyle: "Roboto",
          fontSize: 24,
          fontWeight: "normal",
          textDecoration: "none",
        },
      ])
      setSelectedTextId(newId)
    }
  }

  const handleSelectText = (id) => {
    setSelectedTextId(id)
  }

  const handleDeleteText = () => {
    if (selectedTextId !== null) {
      setTexts(texts.filter((text) => text.id !== selectedTextId))
      setSelectedTextId(null)
    }
  }

  const handleDownloadMeme = () => {
    const selectedTextElement = document.getElementById(
      `text-${selectedTextId}`,
    )
    if (selectedTextElement) {
      selectedTextElement.style.border = "none"
    }

    html2canvas(memeRef.current).then((canvas) => {
      const link = document.createElement("a")
      link.href = canvas.toDataURL("image/png")
      link.download = "meme.png"
      link.click()

      if (selectedTextElement) {
        selectedTextElement.style.border = "2px dotted #000"
      }
    })
  }

  const handleImageSelect = (image) => {
    setSelectedImage(image)
    // No need to hide the image selector
  }

  return (
    <div>
      <Navbar />
      <div className="container123 border-t border-[#535353] bg-[#191919]">
        <div className="right-section bg-[#191919]">
          <div className="flex">
            {selectedImage && selectedTextId !== null && (
              <div className="w-full">
                <div className=" border-b border-[#535353] px-4 py-3">
                  <TextEditor
                    text={texts.find((text) => text.id === selectedTextId)}
                    onTextChange={handleTextChange}
                    onAddText={handleAddText}
                    onDeleteText={handleDeleteText}
                    onToggleBold={handleToggleBold}
                    onToggleItalic={handleToggleItalic}
                    onToggleUnderline={handleToggleUnderline}
                    isAddDisabled={texts.length >= 4}
                  />
                </div>

                <div className="border-b border-[#535353] px-4 py-3">
                  <ColorPicker
                    currentColor={currentColor}
                    onColorChange={handleColorChange}
                  />
                </div>

                <div className="border-b border-[#535353] px-4 py-3">
                  <FontSelector
                    currentFont={
                      texts.find((text) => text.id === selectedTextId)
                        ?.fontStyle
                    }
                    onFontChange={handleFontChange}
                  />
                </div>

                <div className="border-b border-[#535353] px-4 py-3">
                  <FontSizeSelector
                    currentSize={
                      texts.find((text) => text.id === selectedTextId)?.fontSize
                    }
                    onSizeChange={handleFontSizeChange}
                  />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="hidden sm:block">
                    <button
                      className="mx-3 mt-4 flex w-[100px] items-center justify-center gap-1 rounded-md bg-[#5f5f5f] py-3 text-[10px] leading-none text-white md:w-[110px] md:text-[11px] lg:mx-0 lg:w-[120px] lg:text-[12px] xl:w-[130px] xl:text-[13px] 2xl:w-[150px] 2xl:text-[14px] "
                      onClick={() => setSelectedImage(null)} // Option to clear the image
                    >
                      <MdImage className="-translate-y-[1px]" />
                      Change Image
                    </button>
                  </div>

                  <div className="hidden sm:block">
                    <button
                      className="mx-3 mt-4 flex w-[100px] items-center justify-center gap-1 rounded-md bg-[#9bc921] py-3 text-[10px] leading-none text-white md:w-[110px] md:text-[11px] lg:mx-0 lg:w-[120px] lg:text-[12px] xl:w-[130px] xl:text-[13px] 2xl:w-[150px] 2xl:text-[14px]"
                      onClick={handleDownloadMeme}
                      disabled={!selectedImage}
                    >
                      <MdDownloadForOffline />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="middle-section flex justify-center border-x border-[#535353] bg-[#191919]">
          <div>
            {selectedImage && selectedTextId ? (
              <p className="mb-4 mt-6 text-center text-[16px] text-[#fff] sm:pl-[40px] sm:text-left md:text-[19px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px]">
                Meme Template
              </p>
            ) : (
              <p className="mb-4 mt-6 text-center text-[16px] text-[#fff] sm:pl-[40px] sm:text-left md:text-[19px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px]">
                Meme Templates
              </p>
            )}

            <div
              style={{
                position: "relative",
                width: "",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <div
                ref={memeRef}
                style={{ position: "relative", display: "inline-block" }}
              >
                {selectedImage ? (
                  <>
                    <div className="flex items-center justify-center">
                      <img
                        src={selectedImage}
                        alt="Meme"
                        style={{ width: "50%", height: "auto" }}
                      />
                    </div>

                    {texts.map((text) => (
                      <Draggable
                        key={text.id}
                        defaultPosition={{ x: text.x, y: text.y }}
                        onStop={(e, data) => {
                          const newTexts = texts.map((t) =>
                            t.id === text.id
                              ? { ...t, x: data.x, y: data.y }
                              : t,
                          )
                          setTexts(newTexts)
                        }}
                      >
                        <div
                          id={`text-${text.id}`}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            color: text.color,
                            fontSize: `${text.fontSize}px`,
                            fontWeight: text.fontWeight,
                            textDecoration: text.textDecoration,
                            fontStyle: text.fontStyle,
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            fontFamily: text.fontStyle,
                            cursor: "move",
                            border:
                              text.id === selectedTextId
                                ? "2px dotted #fff"
                                : "none",
                          }}
                          onClick={() => handleSelectText(text.id)}
                        >
                          {text.text}
                        </div>
                      </Draggable>
                    ))}
                  </>
                ) : (
                  <div className="w-full">
                    <ImageSelector onImageSelect={handleImageSelect} />
                  </div>
                )}
              </div>

              <Collage />

              {selectedImage && selectedTextId !== null && (
                <div className="w-full">
                  {" "}
                  <div className="mb-6 mt-4 flex flex-col items-center justify-center">
                    <div className="block sm:hidden">
                      <button
                        className="mx-3 mt-4 flex w-[100px] items-center justify-center gap-1 rounded-md bg-[#5f5f5f] py-2 text-[10px] leading-none text-white md:w-[110px] md:text-[11px] lg:mx-0 lg:w-[120px] lg:text-[12px] xl:w-[130px] xl:text-[13px] 2xl:w-[150px] 2xl:text-[14px]"
                        onClick={() => setSelectedImage(null)} // Option to clear the image
                      >
                        <MdImage className="-translate-y-[1px]" />
                        Change Image
                      </button>
                    </div>

                    <div className="block sm:hidden">
                      <button
                        className="mx-3 mt-4 flex w-[100px] items-center justify-center gap-1 rounded-md bg-[#9bc921] py-2 text-[10px] leading-none text-white md:w-[110px] md:text-[11px] lg:mx-0 lg:w-[120px] lg:text-[12px] xl:w-[130px] xl:text-[13px] 2xl:w-[150px] 2xl:text-[14px]"
                        onClick={handleDownloadMeme}
                        disabled={!selectedImage}
                      >
                        <MdDownloadForOffline />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
                templates or upload your own images. Perfect for beginners and
                pros. Start creating and join the meme revolution!
                <footer className="mt-6 border-t border-neutral-700 sm:mt-8 md:mt-10"></footer>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#0e0e0e] py-4 text-white">
        <Footer />
      </footer>
    </div>
  )
}

export default MemeEditor
