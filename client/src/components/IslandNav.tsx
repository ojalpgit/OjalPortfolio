import { useTheme } from "@/components/ThemeProvider";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const sections = ["about", "projects", "skills", "setup", "contact"];

export default function IslandNav() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(sections);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 island-nav rounded-full px-8 py-4 shadow-lg">
      <div className="flex items-center space-x-8">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`text-sm transition-colors duration-300 hover:text-blue-500 ${
              activeSection === section ? "text-blue-500" : ""
            }`}
          >
            {section}
          </button>
        ))}
        
        <button
          onClick={toggleTheme}
          className="ml-4 text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        >
          {theme === "dark" ? "light" : "dark"}
        </button>
      </div>
    </nav>
  );
}
