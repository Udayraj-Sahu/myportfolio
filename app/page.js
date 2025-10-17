import { ThreeBackground } from "@/components/ThreeBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function App() {
	return (
		<div className="relative min-h-screen bg-[#0A192F] overflow-x-hidden">
			{/* Three.js Animated Background */}
			<ThreeBackground />

			{/* Navigation */}
			<Navigation />

			{/* Main Content */}
			<main>
				<HeroSection />
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}
