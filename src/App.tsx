import { useState, useEffect } from "react";
import Homepage from "./imports/Homepage";
import SingleProjectPageCompany1 from "./imports/SingleProjectPageCompany1";
import SingleProjectPageCompany2 from "./imports/SingleProjectPageCompany2";
import SingleProjectPageCompany3 from "./imports/SingleProjectPageCompany3";
import SingleProjectPageCompany4 from "./imports/SingleProjectPageCompany4";

type Page = "home" | "project1" | "project2" | "project3" | "project4";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [scrollToSection, setScrollToSection] = useState<string | null>(null);

  const scrollToElement = (elementId: string) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    setScrollToSection(null);
  };
  
  const navigateToAboutMe = () => {
    setCurrentPage("home");
    setScrollToSection("about-me");
  };
  
  const navigateToFeaturedProjects = () => {
    setCurrentPage("home");
    setScrollToSection("featured-projects");
  };
  
  const navigateToGetInTouch = () => {
    setCurrentPage("home");
    setScrollToSection("get-in-touch");
  };

  const navigateToProject1 = () => setCurrentPage("project1");
  const navigateToProject2 = () => setCurrentPage("project2");
  const navigateToProject3 = () => setCurrentPage("project3");
  const navigateToProject4 = () => setCurrentPage("project4");

  useEffect(() => {
    if (currentPage === "home" && scrollToSection) {
      scrollToElement(scrollToSection);
      setScrollToSection(null);
    }
  }, [currentPage, scrollToSection]);

  return (
    <div className="min-h-screen w-full bg-[#f2f2f2]">
      {currentPage === "home" && (
        <div onClick={(e) => {
          const target = e.target as HTMLElement;
          
          // Handle About Me navigation - both top menu and footer
          if (target.closest('[data-name="About"]')) {
            e.preventDefault();
            scrollToElement("about-me");
            return;
          }
          
          // Handle Work/Portfolio navigation - both top menu and footer
          if (target.closest('[data-name="Work"]') || target.closest('[data-name="Portfolio"]')) {
            e.preventDefault();
            scrollToElement("featured-projects");
            return;
          }
          
          // Handle Contact navigation - footer
          if (target.closest('[data-name="Contact"]')) {
            e.preventDefault();
            scrollToElement("get-in-touch");
            return;
          }
          
          // Navigate to project 1 if clicking on Academia project card area
          if (target.closest('[data-project="academia"]')) {
            navigateToProject1();
          }
          // Navigate to project 2 if clicking on Local Lit Finder project card area
          if (target.closest('[data-project="local-lit-finder"]')) {
            navigateToProject2();
          }
          // Navigate to project 3 if clicking on Drift project card area
          if (target.closest('[data-project="drift"]')) {
            navigateToProject3();
          }
          // Navigate to project 4 if clicking on Theachedemy project card area
          if (target.closest('[data-project="theachedemy"]')) {
            navigateToProject4();
          }
        }}>
          <Homepage />
        </div>
      )}
      {currentPage === "project1" && (
        <div onClick={(e) => {
          const target = e.target as HTMLElement;
          
          // Handle About Me navigation
          if (target.closest('[data-name="About"]')) {
            e.preventDefault();
            navigateToAboutMe();
            return;
          }
          
          // Handle Work navigation
          if (target.closest('[data-name="Work"]')) {
            e.preventDefault();
            navigateToFeaturedProjects();
            return;
          }
          
          // Handle Contact navigation
          if (target.closest('[data-name="Contact"]')) {
            e.preventDefault();
            navigateToGetInTouch();
            return;
          }
          
          // Handle Back to Projects navigation
          if (target.closest('[data-name="BackToProjects"]')) {
            e.preventDefault();
            navigateToFeaturedProjects();
            return;
          }
          
          // Top menu navigation
          if (target.closest('[data-name="Home"]') && target.closest('[data-name="Top menu"]')) {
            navigateToHome();
          }
          
          // Footer navigation
          if (target.closest('[data-name="Home"]') && target.closest('[data-name="Menu"]')) {
            navigateToHome();
          }
        }}>
          <SingleProjectPageCompany1 />
        </div>
      )}
      {currentPage === "project2" && (
        <div onClick={(e) => {
          const target = e.target as HTMLElement;
          
          // Handle About Me navigation
          if (target.closest('[data-name="About"]')) {
            e.preventDefault();
            navigateToAboutMe();
            return;
          }
          
          // Handle Work navigation
          if (target.closest('[data-name="Work"]')) {
            e.preventDefault();
            navigateToFeaturedProjects();
            return;
          }
          
          // Handle Contact navigation
          if (target.closest('[data-name="Contact"]')) {
            e.preventDefault();
            navigateToGetInTouch();
            return;
          }
          
          // Handle Back to Projects navigation
          if (target.closest('[data-name="BackToProjects"]')) {
            e.preventDefault();
            navigateToFeaturedProjects();
            return;
          }
          
          // Top menu navigation
          if (target.closest('[data-name="Home"]') && target.closest('[data-name="Top menu"]')) {
            navigateToHome();
          }
          
          // Footer navigation
          if (target.closest('[data-name="Home"]') && target.closest('[data-name="Menu"]')) {
            navigateToHome();
          }
        }}>
          <SingleProjectPageCompany2 />
        </div>
      )}
      {currentPage === "project3" && (
        <div onClick={(e) => {
          const target = e.target as HTMLElement;
          
          // Handle About Me navigation
          if (target.closest('[data-name="About"]')) {
            e.preventDefault();
            navigateToAboutMe();
            return;
          }
          
          // Handle Work navigation
          if (target.closest('[data-name="Work"]')) {
            e.preventDefault();
            navigateToFeaturedProjects();
            return;
          }
          
          // Handle Contact navigation
          if (target.closest('[data-name="Contact"]')) {
            e.preventDefault();
            navigateToGetInTouch();
            return;
          }
          
          // Handle Back to Projects navigation
          if (target.closest('[data-name="BackToProjects"]')) {
            e.preventDefault();
            navigateToFeaturedProjects();
            return;
          }
          
          // Top menu navigation
          if (target.closest('[data-name="Home"]') && target.closest('[data-name="Top menu"]')) {
            navigateToHome();
          }
          
          // Footer navigation
          if (target.closest('[data-name="Home"]') && target.closest('[data-name="Menu"]')) {
            navigateToHome();
          }
        }}>
          <SingleProjectPageCompany3 />
        </div>
      )}
      {currentPage === "project4" && (
        <div onClick={(e) => {
          const target = e.target as HTMLElement;
          
          // Handle About Me navigation
          if (target.closest('[data-name="About"]')) {
            e.preventDefault();
            navigateToAboutMe();
            return;
          }
          
          // Handle Work navigation
          if (target.closest('[data-name="Work"]')) {
            e.preventDefault();
            navigateToFeaturedProjects();
            return;
          }
          
          // Handle Contact navigation
          if (target.closest('[data-name="Contact"]')) {
            e.preventDefault();
            navigateToGetInTouch();
            return;
          }
          
          // Handle Back to Projects navigation
          if (target.closest('[data-name="BackToProjects"]')) {
            e.preventDefault();
            navigateToFeaturedProjects();
            return;
          }
          
          // Top menu navigation
          if (target.closest('[data-name="Home"]') && target.closest('[data-name="Top menu"]')) {
            navigateToHome();
          }
          
          // Footer navigation
          if (target.closest('[data-name="Home"]') && target.closest('[data-name="Menu"]')) {
            navigateToHome();
          }
        }}>
          <SingleProjectPageCompany4 />
        </div>
      )}
    </div>
  );
}