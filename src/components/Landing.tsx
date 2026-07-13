import { PropsWithChildren, useState, useEffect } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  const [isFlipped, setIsFlipped] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsFlipped((prev) => !prev);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>An</h3>
            <h2 className={`landing-info-h2 ${isFading ? 'text-fade-out' : 'text-fade-in'}`}>
              <div className="landing-h2-1">
                {isFlipped ? "Full-Stack Dev." : "AI Engineer"}
              </div>
            </h2>
            <h2 className={`landing-h2-front ${isFading ? 'text-fade-out' : 'text-fade-in'}`}>
              <div className="landing-h2-info">
                {isFlipped ? "AI Engineer" : "Full-Stack Dev."}
              </div>
            </h2>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img src="/images/mypicnbg.png" alt="Rishi Soni" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
