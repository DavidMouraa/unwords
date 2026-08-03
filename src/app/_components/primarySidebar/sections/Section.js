import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function Section({ children, title, sectionTitle, currentSection, setCurrentSection }) {
  const isCurrentSection = currentSection === sectionTitle

  function toggleCurrentSection() {
    isCurrentSection ? setCurrentSection(null) : setCurrentSection(sectionTitle)
  }

  return (
    <div className={`flex flex-col ${isCurrentSection ? "h-full" : "h-max"} text-sm text-secondary-500`}> 
      <div 
        className="flex items-center gap-1.5 px-2 py-1 border-y border-primary-600 font-bold uppercase cursor-pointer"
        onClick={toggleCurrentSection}
      >
        {isCurrentSection ? (
          <FaChevronDown />
        ) : (
          <FaChevronRight />
        )}
        {title}
      </div>

      <div
        className={`${isCurrentSection ? "h-full" : "h-0"} overflow-hidden`}
      >
        {children}
      </div>
    </div>
  )
}