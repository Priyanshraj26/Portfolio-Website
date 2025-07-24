import { Navbar} from "@/components/Navbar";
import {HeroSection} from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {SkillsSection} from "@/components/SkillsSection";
import {ProjectsSection} from "@/components/ProjectsSection"
import { ContactSection } from "../components/ContactSection";
import {Footer} from "@/components/Footer"

import { WaveCanvas } from "@/components/WaveEmbed";
import Heatmap from "../components/Heatmap";
import { LeetCodeStats } from "@/components/LeetcodeStats";

export const Home = () => {
    return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <WaveCanvas />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
            
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <Heatmap />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    </div>
    );
};
