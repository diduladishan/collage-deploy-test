import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ currentColor, onColorChange }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div>
      <h3 className="text-white mb-2 sm:text-[14px] lg:text-[15px] 2xl:text-[16px] leading-6">
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
  );
};

export default ColorPicker;
