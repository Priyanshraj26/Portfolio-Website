import { Book, Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const dragProps = {
  drag: true,
  dragConstraints: { left: -20, right: 20, top: -20, bottom: 20 },
  dragElastic: 0.2,
  whileDrag: {
    scale: 1.05,
    boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
    cursor: "grabbing",
    zIndex: 10,
  },
  whileHover: {
    scale: 1.02,
    boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
  },
  transition: { type: "spring", stiffness: 400, damping: 25 },
  style: { cursor: "grab", touchAction: "none" },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative"
      style={{ background: "rgba(8, 10, 19, 0.85)", backdropFilter: "blur(4px)" }}
    >
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Developer & ML Engineer
            </h3>

            <p className="text-muted-foreground">
            With a deep interest in solving real-world problems through elegant code and intelligent systems, 
            I specialize in Applied Machine Learning and Full-Stack Development.
            From crafting interactive UIs with React to deploying ML models with Flask and TensorFlow, 
            I build performant, scalable, and accessible applications.
            </p>

            <p className="text-muted-foreground">
            I'm experienced in leveraging Python for backend development and machine learning, 
            working with libraries like scikit-learn, TensorFlow/Keras, 
            and integrating APIs and tools like Hugging Face to bring AI to production.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1ziDQIvs-dTyLuRilkcsGUmkJu0W13F-P/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div {...dragProps} className="gradient-border p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Creating models solving real-world issues with mordern techniques
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...dragProps} className="gradient-border p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Science + Algorithms</h4>
                  <p className="text-muted-foreground">
                    Ranging from writing Data Science code in Python to writing algorithms in C++
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...dragProps} className="gradient-border p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Book className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX + Graphical Design</h4>
                  <p className="text-muted-foreground">
                    Minding the space between the elements and creating some unique and elegant designs
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};