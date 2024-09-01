import { useEffect } from "react";

export function useCustomScript() {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-link]");

    buttons.forEach((button) => {
      const handleClick = () => {
        const link = button.dataset.link;
        if (link) {
          window.open(link, "_blank");
        }
      };

      button.addEventListener("click", handleClick);

      // Cleanup function
      return () => {
        button.removeEventListener("click", handleClick);
      };
    });
  }, []); // Empty dependency array to run only on mount/unmount
}

export default useCustomScript;
