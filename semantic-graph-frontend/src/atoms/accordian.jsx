import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, Component }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="border rounded overflow-hidden mb-5">
      <div
        className="flex justify-between items-center border-b px-4 py-2 bg-gray-100 cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="font-semibold text-xs">{title}</span>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="h-3 w-3"
        />
      </div>
      {isOpen && <div className="p-4 bg-white">{Component()}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired,
};

export default Accordion;
