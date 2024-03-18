import { useState } from "react";
import Button from "./Button";

export default function Notice() {
  const [isOpen, setIsOpen] = useState(true)


  return isOpen ? (
    <div className="notice section section--inline">
      {/* An anonymous div */}
      <div></div>
      <span className="color-enlightened">
        ✨ Discover your dream property with estatein{" "}
        <a href="" className="link">
          Learn more
        </a>
      </span>
      <Button
        variant="secondary"
        utilityClasses="btn--round btn--icon w-35px h-35px"
        onClick={() => setIsOpen(false)}
      >
        &times;
      </Button>
    </div>
  ) : null;
}
