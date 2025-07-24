import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
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

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build intelligent systems using Machine Learning and Data Science. 
            While my focus is backend and model development, 
            I also enjoy front-end and visual design as a creative hobby.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll down"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce focus:outline-none"
        onClick={() => {
          window.scrollBy({ top: window.innerHeight * 1, left: 0, behavior: "smooth" });
        }}
      >
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </button>
    </section>
  );
};