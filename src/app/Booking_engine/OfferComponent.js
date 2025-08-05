import { useState } from "react";

const OfferComponent = () => {
  const offers = [
    "None",
    "Corporate Access Code",
    "Travel Agency Code",
    "Business Connect Code",
    "Group Code",
  ];

  // Set the first offer as the default
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (offer) => {
    setSelectedOffer(offer);
    setIsOpen(false); // Close the dropdown after selection
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="select-selected"
      >
        {selectedOffer}
      </button>

      {isOpen && (
        <ul className="select-options">
          {offers.map((offer) => (
            <li
              key={offer}
              onClick={() => handleSelect(offer)}
              className="select-option"
            >
              <span>{offer}</span>
              {selectedOffer === offer && <span> &#10003;</span>}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default OfferComponent;
