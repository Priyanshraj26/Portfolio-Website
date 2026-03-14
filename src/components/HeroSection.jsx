import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Text content - left aligned on md+ */}
      <div className="container max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            {/* Star Wars episode tag */}
            <div className="opacity-0 animate-fade-in">
              <div
                className="h-[1px] w-[30%] mb-3 md:mx-0 mx-auto"
                style={{
                  background:
                    "linear-gradient(90deg, #FFE81F, transparent)",
                }}
              />
              <p
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Episode IV &mdash; The Developer Awakens
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Priyansh
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Raj Gupta
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3"
              style={{ letterSpacing: "0.02em" }}
            >
              I build intelligent systems using Machine Learning and Data
              Science. While my focus is backend and model development, I
              also enjoy front-end and visual design as a creative hobby.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
              <a
                href="#projects"
                className="cosmic-button"
                style={{
                  transition: "box-shadow 300ms, transform 300ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right column is occupied by the sticky DeathStarScene in parallax zone */}
          <div className="hidden md:block" />
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll down"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce focus:outline-none"
        onClick={() => {
          window.scrollBy({
            top: window.innerHeight * 1,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </button>
    </section>
  );
};
