import * as React from "react";
import "./CordataClient.css";
import { useState } from "react";
import { useEffect } from "react";

export const handleScrollToView = (id) => {
  const container = document.getElementById(id);
  container.scrollIntoView({ behavior: "smooth" });
};

const ScrollTopButton = () => {
  const handleScrollTop = () => {
    handleScrollToView("cordataClientContainer");
  };
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button className="scroll-top-button" onClick={handleScrollTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 512 512"
          id="top-arrow"
        >
          <g data-name="<Group>">
            <polygon
              points="256 217.463 403.785 365.248 439.141 329.893 256 146.752 72.859 329.893 108.215 365.248 256 217.463"
              data-name="<Path>"
            ></polygon>
          </g>
        </svg>
      </button>
    )
  );
};

export default ScrollTopButton;
