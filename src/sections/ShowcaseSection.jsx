import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const snapcastRef = useRef(null);
  const storeitRef = useRef(null);

  useGSAP(() => {
    // Fade in entire section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate each project card on scroll
    const cards = [snapcastRef.current, storeitRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* SnapCast Project */}
          <div ref={snapcastRef} className="first-project-wrapper">
            <div className="text-content">
              <h2>SnapCast – Record, Upload & Share Videos Seamlessly</h2>
              <p className="text-white-50 md:text-xl">
                Built with Next.js, TailwindCSS, Appwrite, and Plaid, SnapCast lets
                users record their screen, upload videos, and authenticate with Google.
              </p>
            </div>
          </div>

          {/* StoreIt Project */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={storeitRef}>
              <h2>StoreIt – Personal Cloud File Storage App</h2>
              <p className="text-white-50 md:text-base px-2 pb-4">
                A secure and user-friendly cloud storage platform built with Next.js and Appwrite. Upload, preview, and manage your files seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;