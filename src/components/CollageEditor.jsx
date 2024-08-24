import CollageFrame from "./CollageFrame"
import DownloadButton from "./DownloadButton"
import ImageUploader from "./ImageUploader"
import React, { useState } from "react"

const frameOptions = [
  { name: "Square", layout: "square" },
  { name: "Square divided into 2", layout: "square-2" },
  { name: "Square divided into 4", layout: "square-4" },
]

function CollageEditor() {
  const [selectedFrame, setSelectedFrame] = useState(frameOptions[0].layout)
  const [images, setImages] = useState([])

  const handleImageUpload = (newImages) => {
    setImages([...images, ...newImages])
  }

  return (
    <div className="collage-editor">
      <select
        onChange={(e) => setSelectedFrame(e.target.value)}
        value={selectedFrame}
      >
        {frameOptions.map((option) => (
          <option key={option.layout} value={option.layout}>
            {option.name}
          </option>
        ))}
      </select>

      <CollageFrame layout={selectedFrame} images={images} />
      <ImageUploader onUpload={handleImageUpload} />
      <DownloadButton />
    </div>
  )
}

export default CollageEditor
