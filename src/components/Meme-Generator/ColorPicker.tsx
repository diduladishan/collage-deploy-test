import React, { useState } from "react"
import { SketchPicker, ColorResult } from "react-color"

// Define the type for the component's props
interface ColorPickerProps {
  currentColor: string
  onColorChange: (color: ColorResult) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  currentColor,
  onColorChange,
}) => {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false)

  return (
    <div>
      <h3 className="mb-2 leading-6 text-white sm:text-[14px] lg:text-[15px] 2xl:text-[16px]">
        Select Text Color:
      </h3>
      <button
        onClick={() => setShowColorPicker(!showColorPicker)}
        style={{
          backgroundColor: currentColor,
          width: "30px",
          height: "30px",
          border: "2px solid white",
          cursor: "pointer",
          position: "relative",
          borderRadius: "5px",
        }}
      />
      {showColorPicker && (
        <div className="absolute">
          <SketchPicker color={currentColor} onChangeComplete={onColorChange} />
        </div>
      )}
    </div>
  )
}

export default ColorPicker
