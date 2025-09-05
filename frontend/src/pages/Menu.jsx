import React, { useState } from "react"; 

const AccordionMenu = () => {
  // Track which section is open, initially no section is open (set to null)
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked section is already open, close it by setting openIndex to null
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index); // Open the clicked section
    }
  };

  return (
    <div className="relative">
      {/* Accordion Menu */}
      <div className="w-ful bg-gray-500 border border-gray-300 rounded-md shadow-lg z-10 mx-auto">
        <ul className="divide-y divide-gray-200">
          {/* Section 1 */}
          <li>
            <button
              onClick={() => handleToggle(0)}
              className="w-full text-center p-3 hover:bg-secondary font-medium"
            >
              Contact
            </button>
            <div
              style={{
                maxHeight: openIndex === 0 ? "500px" : 0, // Adjust maxHeight for content
                transition: "max-height 0.3s ease-out",
                overflow: "hidden",
              }}
            >
              <p className="p-3 text-gray-800">
                Here is some information about how to contact us. We are available via email, phone, and social media. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </li>

          {/* Section 2 */}
          <li>
            <button
              onClick={() => handleToggle(1)}
              className="w-full text-center p-3 hover:bg-secondary font-medium"
            >
              About Us
            </button>
            <div
              style={{
                maxHeight: openIndex === 1 ? "500px" : 0, // Adjust maxHeight for content
                transition: "max-height 0.3s ease-out",
                overflow: "hidden",
              }}
            >
              <p className="p-3 text-gray-800">
                We are a company that values innovation and sustainability. Our mission is to provide top-quality products to our customers.
              </p>
            </div>
          </li>

          {/* Add more sections similarly */}
        </ul>
      </div>
    </div>
  );
};

export default AccordionMenu;



