import React, { useState } from "react";

export default function RadioButton({ options, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);

  const handleSelectionChange = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <label key={option.value} className="flex items-center cursor-pointer gap-2 inline-flex hover:opacity-90 transition-opacity">
          <input type="radio" name="customRadio" value={option.value} checked={selected === option.value} onChange={() => handleSelectionChange(option.value)} className="hidden" />
          <span
            className={`w-4 h-4 rounded-full flex items-center justify-center border transition-colors
              ${selected === option.value ? "bg-pink-500 border-pink-500" : "border-pink-300 hover:border-pink-400"}`}
            style={{ width: "16px", height: "16px", borderWidth: "1px" }}
          >
            {selected === option.value && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
          </span>
          <span
            className={`ml-2 transition-colors
              ${selected === option.value ? "text-pink-800 font-medium" : "text-pink-500 hover:text-pink-600"}`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
