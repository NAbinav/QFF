import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typing() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [" Computing", " Algorithms", " Circuits", " Machine Learning"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 1000,
      showCursor: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-3xl  max-sm:2xl">
      <span>We conduct workshop on Quantum </span>
      <span className="typing" ref={typedElement} />
    </div>
  );
}
