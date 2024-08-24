import React from "react"

// Define the type for the component's props
interface FontSelectorProps {
  currentFont: string
  onFontChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const FontSelector: React.FC<FontSelectorProps> = ({
  currentFont,
  onFontChange,
}) => {
  return (
    <div>
      <h3 className="mb-2 leading-6 text-white sm:text-[14px] lg:text-[15px] 2xl:text-[16px]">
        Select Font Style:
      </h3>
      <select value={currentFont} onChange={onFontChange}>
        <option value="Roboto">Roboto</option>
        <option value="Lobster">Lobster</option>
        <option value="Oswald">Oswald</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Raleway">Raleway</option>
        <option value="Pacifico">Pacifico</option>
      </select>
    </div>
  )
}

export default FontSelector
