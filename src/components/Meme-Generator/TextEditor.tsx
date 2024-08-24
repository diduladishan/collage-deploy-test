import React from "react"
import {
  MdDeleteForever,
  MdAddToPhotos,
  MdFormatBold,
  MdFormatUnderlined,
  MdFormatItalic,
} from "react-icons/md"

// Define the types for the props
interface TextStyle {
  fontWeight?: "normal" | "bold"
  fontStyle?: "normal" | "italic"
  textDecoration?: "none" | "underline"
}

interface TextEditorProps {
  text: {
    text?: string
    fontWeight?: "normal" | "bold"
    fontStyle?: "normal" | "italic"
    textDecoration?: "none" | "underline"
  }
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onAddText: () => void
  onDeleteText: () => void
  onToggleBold: () => void
  onToggleUnderline: () => void
  onToggleItalic: () => void
  isAddDisabled: boolean
}

const TextEditor: React.FC<TextEditorProps> = ({
  text,
  onTextChange,
  onAddText,
  onDeleteText,
  onToggleBold,
  onToggleUnderline,
  onToggleItalic,
  isAddDisabled,
}) => {
  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={text.text || ""}
          className="w-full rounded-sm bg-white px-2 py-1.5 text-black sm:text-[14px] lg:text-[15px] 2xl:py-2 2xl:text-[16px]"
          onChange={onTextChange}
          placeholder="Enter text"
        />
      </div>

      <div className="mb-4 flex items-center gap-4 text-white">
        <button
          onClick={onAddText}
          disabled={isAddDisabled}
          className="flex items-center justify-center gap-1 rounded-md bg-[#40813f] px-2 py-1 sm:text-[14px] lg:text-[15px] 2xl:text-[16px]"
        >
          <MdAddToPhotos className="text-[16px] 2xl:text-[18px]" />
          Add
        </button>
        <button
          onClick={onDeleteText}
          className="flex items-center justify-center gap-0.5 rounded-md bg-[#e5342f] px-2 py-1 sm:text-[14px] lg:text-[15px] 2xl:text-[16px]"
        >
          <MdDeleteForever className="-translate-y-[1px] text-[16px] 2xl:text-[18px]" />
          Delete
        </button>
      </div>

      <div className="flex gap-4 text-white">
        <button
          onClick={onToggleBold}
          style={{ fontWeight: text.fontWeight === "bold" ? "bold" : "normal" }}
        >
          <MdFormatBold className="text-[24px]" />
        </button>
        <button
          onClick={onToggleItalic}
          style={{
            fontStyle: text.fontStyle === "italic" ? "italic" : "normal",
          }}
        >
          <MdFormatItalic className="text-[24px]" />
        </button>
        <button
          onClick={onToggleUnderline}
          style={{
            textDecoration:
              text.textDecoration === "underline" ? "underline" : "none",
          }}
        >
          <MdFormatUnderlined className="text-[24px]" />
        </button>
      </div>
    </div>
  )
}

export default TextEditor
