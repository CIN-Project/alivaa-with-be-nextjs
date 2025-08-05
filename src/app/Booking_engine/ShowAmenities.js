import { useState } from 'react';

const SingleSelectOptions = () => {
  const options = 
   ['website only benefits', 'Extra 5% Off', ' Free High-Speed Wi-Fi', 'Best Rate Guaranteed', 'Welcome Amenities'];
  
  // Set the first option as the default
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selection (optional)
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="select-selected"
      >
        {selectedOption} ↓
      </button>

      {isOpen && (
        
          <ul className="select-options">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="select-option"
              >
                <span>{option}</span>
                {selectedOption === option && (
                  <span> ✓</span>
                )}
              </li>
            ))}
          </ul>
      )}
    </>
  );
};
export default SingleSelectOptions;
