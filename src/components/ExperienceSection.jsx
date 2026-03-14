import { Briefcase, Calendar } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative"
      style={{ background: "rgba(8, 10, 19, 0.85)", backdropFilter: "blur(4px)" }}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {/* Experience Card */}
          <div className="gradient-border p-6 md:p-8 card-hover">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="p-3 rounded-full bg-primary/10 shrink-0 self-start">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <div className="space-y-4 text-left">
                {/* Header */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    VizuaraAI
                  </h3>
                  <p className="text-primary font-medium">
                    UI-UX & Full-Stack
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 2025 - Feb 2026</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 shrink-0">&#9642;</span>
                    <span>
                      Designed and developed an industrial website of the company
                      using React and Tailwind CSS, implementing responsive
                      component architecture and integrating custom motion
                      graphics to enhance visual engagement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 shrink-0">&#9642;</span>
                    <span>
                      Built interactive educational web applications for school
                      students to teach foundational ML and LLM concepts, using
                      React for dynamic visualizations and Python-based modules
                      to demonstrate model workflows and inference logic.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 shrink-0">&#9642;</span>
                    <span>
                      Contributed to the company's primary website by developing
                      custom UI components and implementing design enhancements
                      aligned with the company's visual identity.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};