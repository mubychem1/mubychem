import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const App = () => {
  const Dropdown = ({ label, options }) => {
    const [selected, setSelected] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative w-60">
        <label className="text-gray-700 text-sm block mb-1">{label}</label>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center border-b-2 border-purple-500 py-2 cursor-pointer"
        >
          <span className="text-sm text-gray-700">
            {selected || `Select ${label}`}
          </span>
          <ChevronDown className="h-4 w-4 text-purple-500" />
        </div>

        {isOpen && (
          <ul className="absolute bg-white z-10 mt-1 w-full rounded shadow border border-gray-200">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 gap-10">
      <Dropdown
        label="Business Unit"
        options={["Sales", "Marketing", "Engineering", "Finance"]}
      />
      <Dropdown
        label="Location"
        options={["Mumbai", "Pune", "Bangalore", "Hyderabad"]}
      />
    </div>
  );
};

export default App;