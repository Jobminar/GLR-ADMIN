import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faChevronDown,
  faChevronUp,
  faPlayCircle,
  faFileAlt,
  faTasks,
  faCertificate,
  faInfinity,
  faLock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const SectionItem = ({ id, title, duration, preview }) => (
  <li className="mb-1 flex justify-between items-center">
    <span className="flex items-center">
      {preview ? (
        <button
          className="text-blue-600 hover:text-blue-800 flex items-center mr-2"
          aria-label="Preview"
        >
          <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
          Preview
        </button>
      ) : (
        <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-2" />
      )}
      {title}
    </span>
    <span className="text-gray-600">({duration})</span>
  </li>
);

SectionItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  preview: PropTypes.bool,
};

const Section = ({ sectionNumber, title, items, toggleSection, isOpen }) => (
  <div className="mb-4">
    <div
      className="font-bold text-lg mb-2 cursor-pointer flex justify-between items-center"
      onClick={() => toggleSection(sectionNumber)}
    >
      {title}
      <FontAwesomeIcon
        icon={isOpen ? faChevronUp : faChevronDown}
        className="text-lg"
      />
    </div>
    {isOpen && (
      <ul className="list-disc pl-6 text-sm">
        {items.map((item) => (
          <SectionItem key={item.id} {...item} />
        ))}
      </ul>
    )}
  </div>
);

Section.propTypes = {
  sectionNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      preview: PropTypes.bool,
    }),
  ).isRequired,
  toggleSection: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

function CourseExplore() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Course Banner */}
      <div className="bg-blue-600 text-white text-center py-16 lg:py-24">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">
          The Complete JavaScript Course
        </h1>
        <p className="text-md lg:text-xl mb-4">
          Learn JavaScript from scratch and get started with building your own
          web applications.
        </p>
      </div>

      {/* Main Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between py-10">
          {/* Left Section: Course Content */}
          <div className="md:w-3/5 lg:w-2/3">
            <div className="bg-white shadow rounded-lg mb-8">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold">Course Content</h2>
              </div>
              <div className="p-6">
                <Section
                  sectionNumber={1}
                  title="Section 1: HTML Introduction"
                  items={[
                    {
                      id: "intro",
                      title: "Introduction",
                      duration: "4 min",
                      preview: true,
                    },
                    {
                      id: "html-def",
                      title: "What is HTML",
                      duration: "5 min",
                      preview: false,
                    },
                    // Additional items...
                  ]}
                  toggleSection={toggleSection}
                  isOpen={openSection === 1}
                />
                {/* Additional sections... */}
              </div>
            </div>
          </div>
          {/* Right Section: Course Features and Actions */}
          <div className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Course Features</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="text-blue-600"
                  />
                  <span className="ml-2 text-md">13 hours on-demand video</span>
                </div>
                <hr className="my-4" />
                <div className="flex items-center justify-between mb-2">
                  <FontAwesomeIcon
                    icon={faInfinity}
                    className="text-blue-600"
                  />
                  <span className="ml-2 text-md">Full lifetime access</span>
                </div>
                <hr className="my-4" />
                <div className="flex items-center justify-between mb-2">
                  <FontAwesomeIcon icon={faFileAlt} className="text-blue-600" />
                  <span className="ml-2 text-md">
                    42 downloadable resources
                  </span>
                </div>
                <hr className="my-4" />
                <div className="flex items-center justify-between mb-2">
                  <FontAwesomeIcon icon={faTasks} className="text-blue-600" />
                  <span className="ml-2 text-md">Assignments</span>
                </div>
                <hr className="my-4" />
                <div className="flex items-center justify-between">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    className="text-blue-600"
                  />
                  <span className="ml-2 text-md">
                    Certificate of Completion
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6 mt-1">
              {/* Row for Add to Cart and Add to Wishlist Buttons */}
              <div className="flex justify-start space-x-4 mb-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-6 rounded transition ease-in duration-200">
                  <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                  Add to Cart
                </button>

                <button className="text-blue-500 hover:text-blue-600 bg-transparent font-bold py-1 px-6 rounded transition ease-in duration-200 border border-blue-500 hover:border-blue-600">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  Add to Wishlist
                </button>
              </div>

              {/* Row for Buy Now Button */}
              <div className="flex justify-center mt-0">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-10 rounded transition ease-in duration-200">
                  Buy Now
                  <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
                </button>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6 mt-1">
              <div className="mb-4 flex items-center border-b pb-4">
                <input
                  type="text"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Coupon Code"
                />
                <button
                  className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 rounded"
                  type="button"
                >
                  Apply
                </button>
              </div>
              <p className="text-center text-sm bg-gray-200 rounded p-2">
                Coupon: BHGVG132445 is applied
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseExplore;
