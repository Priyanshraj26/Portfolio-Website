import { ArrowRight } from "lucide-react";
import PixelCard from "./PixelCard"; // Adjust the import path as needed

export const Design = () => {
  return (
    <section id="design" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary"> Designer</span> Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Creative Designer and Media Manager
            </h3>

            <p className="text-muted-foreground">
              I am a creative professional specializing in visual design and digital media strategy. 
              I focus on crafting clean, expressive visuals that communicate clearly and align with a brand's identity. 
              My work spans graphic design, content planning, and video production, 
              ensuring consistent and engaging storytelling across platforms.
            </p>

            <p className="text-muted-foreground">
              With experience leading creative efforts and managing social media presence for communities and events, 
              I combine design sense with strategic thinking to deliver impactful, 
              audience-focused digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                {" "}
                Designer Portfolio <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Pixel Card with Website Preview */}
          <div className="relative w-full flex justify-center items-center">
            <PixelCard 
              variant="default"
              gap={8}
              speed={40}
              colors="#8b5cf6,#a78bfa,#c4b5fd" // Purple shades to match primary color
              className="!w-full !h-[500px] !aspect-auto group"
            >
              {/* Content positioned absolutely inside PixelCard */}
              <div className="absolute inset-2 rounded-[20px] overflow-hidden">
                {/* Website Preview Layer */}
                <div className="absolute inset-0 bg-background/95 rounded-[20px] overflow-hidden">
                  {/* Preview iframe */}
                  <div
                    className="w-full h-full rounded-[20px] overflow-hidden"
                    style={{
                      pointerEvents: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <iframe
                      src="https://designer-portfolio-gilt.vercel.app/"
                      className="w-[150%] h-[150%] origin-top-left"
                      title="Designer Portfolio Preview"
                      loading="lazy"
                      scrolling="no"
                      style={{
                        border: 'none',
                        backgroundColor: '#000',
                        transform: 'scale(0.67)',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Pixel Canvas Overlay - This brings the pixel effect on top */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ 
                    isolation: 'isolate',
                    zIndex: 10 
                  }}
                >
                  {/* The canvas from PixelCard will render here through portal or CSS positioning */}
                </div>

                {/* Interactive Overlay */}
                <div className="absolute inset-0 z-20">
                  {/* Non-interactive transparent overlay for blocking iframe interaction */}
                  <div className="absolute inset-0 bg-transparent cursor-pointer" />
                  
                  {/* Hover overlay with "View Portfolio" */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-[20px]">
                    <a
                      href="https://designer-portfolio-gilt.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button w-fit flex items-center mx-auto gap-2 transform scale-95 group-hover:scale-100 transition-transform duration-300 relative z-30"
                    >
                      View Full Portfolio →
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional style override to ensure canvas is on top */}
              <style jsx>{`
                :global(.${PixelCard.name || 'PixelCard'} canvas) {
                  z-index: 15 !important;
                  pointer-events: none !important;
                  position: absolute !important;
                  inset: 0 !important;
                }
              `}</style>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};