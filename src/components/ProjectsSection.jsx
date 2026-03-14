import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "IMPACT",
    description: "A Dashboard rating performance and improvements for interviews powered with AI",
    image: "/projects/project1.png",
    tags: ["React", "Flask", "NLP","CV","AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/Priyanshraj26/IMPACT--Interview-Monitoring",
  },
  {
    id: 2,
    title: "Emotion Detection Model",
    description:
      "A Deep Learning model recognizing emotions in an audio. Custom made for IMPACT",
    image: "/projects/project2.png",
    tags: ["Python", "CNN", "NLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/Priyanshraj26/Emotion-Detection",
  },

  {
    id: 3,
    title: "Spotify Scaler",
    description:
      " Python based application to determine features of songs",
    image: "/projects/project3.png",
    tags: ["Python", "FFmpeg", "Streamlit", "API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Priyanshraj26/SpotifyScaler",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one showcases my skills and uniqueness !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <motion.div
              key={key}
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              dragElastic={0.2}
              whileDrag={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
                cursor: "grabbing",
                zIndex: 10,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group bg-card rounded-lg overflow-hidden shadow-xs"
              style={{ cursor: "grab", touchAction: "none" }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Priyanshraj26"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};