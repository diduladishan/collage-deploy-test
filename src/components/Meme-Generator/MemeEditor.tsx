import image8 from "../../assets/5.png"
import image1 from "../../assets/image01.png"
import image2 from "../../assets/image02.png"
import image3 from "../../assets/image03.png"
import image4 from "../../assets/image04.png"
import image5 from "../../assets/image05.png"
import image6 from "../../assets/image06.png"
import image7 from "../../assets/image07.png"
import Navbar from "../Navbar"
// import Collage from "../collage/collage"
import ColorPicker from "./ColorPicker"
import FontSelector from "./FontSelector"
import FontSizeSelector from "./FontSizeSelector"
// import ImageSelector from "./ImageSelector"
// import TextEditor from "./TextEditor"
import "./memeEditor.css"
import html2canvas from "html2canvas"
import React, { useState, useRef, useEffect } from "react"
import Draggable from "react-draggable"
import { MdDownloadForOffline, MdImage } from "react-icons/md"

interface Text {
  id: number
  text: string
  x: number
  y: number
  color: string
  fontStyle: "normal" | "italic"
  fontSize: number
  // fontWeight: "normal" | "bold"
  // textDecoration: "none" | "underline"
}

const images = [image1, image2, image3, image4, image5, image6, image7, image8]

const MemeEditor: React.FC = () => {
  const [texts, setTexts] = useState<Text[]>([])
  const [selectedTextId, setSelectedTextId] = useState<number | null>(null)
  const [currentColor, setCurrentColor] = useState<string>("#ffffff")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const memeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (texts.length === 0) {
      handleAddText()
    }
  }, [texts])

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, text: e.target.value } : text,
    )
    setTexts(newTexts)
  }

  const handleColorChange = (color: { hex: string }) => {
    setCurrentColor(color.hex)
    const newTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, color: color.hex } : text,
    )
    setTexts(newTexts)
  }

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? { ...text, fontStyle: e.target.value as "normal" | "italic" }
        : text,
    )
    setTexts(newTexts)
  }

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? { ...text, fontSize: parseInt(e.target.value, 10) }
        : text,
    )
    setTexts(newTexts)
  }

  // const handleToggleBold = () => {
  //   const newTexts = texts.map((text) =>
  //     text.id === selectedTextId
  //       ? {
  //           ...text,
  //           fontWeight: text.fontWeight === "bold" ? "normal" : "bold",
  //         }
  //       : text,
  //   )
  //   setTexts(newTexts)
  // }

  // const handleToggleItalic = () => {
  //   const newTexts = texts.map((text) =>
  //     text.id === selectedTextId
  //       ? {
  //           ...text,
  //           fontStyle: text.fontStyle === "italic" ? "normal" : "italic",
  //         }
  //       : text,
  //   )
  //   setTexts(newTexts)
  // }

  // const handleToggleUnderline = () => {
  //   const newTexts = texts.map((text) =>
  //     text.id === selectedTextId
  //       ? {
  //           ...text,
  //           textDecoration:
  //             text.textDecoration === "underline" ? "none" : "underline",
  //         }
  //       : text,
  //   )
  //   setTexts(newTexts)
  // }

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
          fontStyle: "normal",
          fontSize: 24,
          // fontWeight: "normal",
          // textDecoration: "none",
        },
      ])
      setSelectedTextId(newId)
    }
  }

  const handleSelectText = (id: number) => {
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

    html2canvas(memeRef.current!).then((canvas) => {
      const link = document.createElement("a")
      link.href = canvas.toDataURL("image/png")
      link.download = "meme.png"
      link.click()

      if (selectedTextElement) {
        selectedTextElement.style.border = "2px dotted #000"
      }
    })
  }

  const handleImageSelect = (image: string) => {
    setSelectedImage(image)
  }

  return (
    <div>
      <Navbar />
      <div className="container123 border-t border-[#535353] bg-[#191919]">
        <div className="right-section bg-[#191919]">
          <div className="flex">
            {selectedImage && selectedTextId !== null && (
              <div className="w-full">
                <div className="border-b border-[#535353] px-4 py-3">
                  {/* <TextEditor
                    text={
                      texts.find((text) => text.id === selectedTextId) || {
                        text: "",
                        fontWeight: "normal",
                        fontStyle: "normal",
                        textDecoration: "none",
                        // fontSize: 24,
                      }
                    }
                    onTextChange={handleTextChange}
                    onAddText={handleAddText}
                    onDeleteText={handleDeleteText}
                    onToggleBold={handleToggleBold}
                    onToggleItalic={handleToggleItalic}
                    onToggleUnderline={handleToggleUnderline}
                    isAddDisabled={texts.length >= 4}
                  /> */}
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
                        ?.fontStyle || "normal"
                    }
                    onFontChange={handleFontChange}
                  />
                </div>

                <div className="border-b border-[#535353] px-4 py-3">
                  <FontSizeSelector
                    currentSize={
                      texts.find((text) => text.id === selectedTextId)
                        ?.fontSize || 24
                    }
                    onSizeChange={handleFontSizeChange}
                  />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="hidden sm:block">
                    <button
                      className="mx-3 mt-4 flex w-[100px] items-center justify-center gap-1 rounded-md bg-[#5f5f5f] py-3 text-[10px] leading-none text-white md:w-[110px] md:text-[11px] lg:mx-0 lg:w-[120px] lg:text-[12px] xl:w-[130px] xl:text-[13px] 2xl:w-[150px] 2xl:text-[14px]"
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

        <div className="left-section">
          <div className="flex flex-wrap gap-2 p-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Template ${index + 1}`}
                className="h-24 w-24 cursor-pointer object-cover"
                onClick={() => handleImageSelect(img)}
              />
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="meme-container" ref={memeRef}>
            <img
              src={selectedImage}
              alt="Selected Template"
              className="meme-image"
            />
            {texts.map((text) => (
              <Draggable
                key={text.id}
                position={{ x: text.x, y: text.y }}
                onStop={(e, data) => {
                  const newTexts = texts.map((t) =>
                    t.id === text.id ? { ...t, x: data.x, y: data.y } : t,
                  )
                  setTexts(newTexts)
                }}
              >
                <div
                  id={`text-${text.id}`}
                  style={{
                    color: text.color,
                    fontSize: text.fontSize,
                    // fontWeight: text.fontWeight,
                    fontStyle: text.fontStyle,
                    // textDecoration: text.textDecoration,
                    position: "absolute",
                    left: text.x,
                    top: text.y,
                    whiteSpace: "pre-wrap",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSelectText(text.id)}
                >
                  {text.text}
                </div>
              </Draggable>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MemeEditor
