import { useState, useEffect } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { NavBar} from "@/components/NavBar";
import {HeroSection} from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {ExperienceSection} from "@/components/ExperienceSection";
import {SkillsSection} from "@/components/SkillsSection";
import {ProjectsSection} from "@/components/ProjectsSection"
import { ContactSection } from "../components/ContactSection";
import {Footer} from "@/components/Footer"
import {Design } from "@/components/Design"
import { StarWarsIntro } from "@/components/StarWarsIntro";
import { DeathStarScene } from "@/components/DeathStarScene";
import { R2D2Chatbot } from "@/components/R2D2Chatbot";
import { useBlasterClick } from "@/components/MicroAnimations";
import { TIEFighterFlyby } from "@/components/TIEFighterFlyby";

import { WaveCanvas } from "@/components/WaveEmbed";
import Heatmap from "../components/Heatmap";

export const Home = () => {
    const [introComplete, setIntroComplete] = useState(false);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [scrollVal, setScrollVal] = useState(0);

    // Mouse tracking for Death Star
    useEffect(() => {
        const handler = (e) => {
            setMouse({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            });
        };
        window.addEventListener("mousemove", handler);
        return () => window.removeEventListener("mousemove", handler);
    }, []);

    // Scroll progress for parallax (0 at top, 1 at ~30% of page)
    const { scrollYProgress } = useScroll();
    const scrollProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    useMotionValueEvent(scrollProgress, "change", (v) => {
        setScrollVal(v);
    });

    // Blaster spark on all cosmic-button clicks
    useBlasterClick();

    return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Star Wars Opening Crawl */}
        {!introComplete && (
            <StarWarsIntro onComplete={() => setIntroComplete(true)} />
        )}

        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <WaveCanvas />
        </div>

        {/* Foreground Content */}
        <div
            className="relative z-10 transition-opacity duration-1000"
            style={{ opacity: introComplete ? 1 : 0 }}
        >

            <NavBar />
            <main>
                {/* Parallax Zone: Death Star stays sticky across Hero + About + Experience */}
                <div className="relative">
                    {/* Sticky 3D scene — follows scroll */}
                    <div
                        style={{
                            position: "sticky",
                            top: 0,
                            height: "100vh",
                            zIndex: 1,
                            pointerEvents: "none",
                        }}
                    >
                        <DeathStarScene
                            scrollProgress={scrollVal}
                            mouseX={mouse.x}
                            mouseY={mouse.y}
                        />
                    </div>

                    {/* Sections stack on top */}
                    <div style={{ position: "relative", zIndex: 2, marginTop: "-100vh" }}>
                        <HeroSection />
                        <AboutSection />
                        <ExperienceSection />
                    </div>
                </div>

                <TIEFighterFlyby sectionId="about" />
                <TIEFighterFlyby sectionId="skills" />
                <TIEFighterFlyby sectionId="projects" />

                <div className="section-divider" />
                <Heatmap />
                <div className="section-divider" />
                <SkillsSection />
                <div className="section-divider" />
                <ProjectsSection />
                <div className="section-divider" />
                <Design/>
                <div className="section-divider" />
                <ContactSection />
            </main>
            <Footer />
        </div>

        {/* R2-D2 Chatbot - fixed position, always visible */}
        {introComplete && <R2D2Chatbot />}
    </div>
    );
};
