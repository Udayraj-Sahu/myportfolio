"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
	const [displayedText, setDisplayedText] = useState("");
	const fullText =
		"Full-Stack Developer | Motion Enthusiast | Problem Solver";
	const textIndex = useRef(0);

	useEffect(() => {
		const timer = setInterval(() => {
			if (textIndex.current < fullText.length) {
				setDisplayedText(fullText.slice(0, textIndex.current + 1));
				textIndex.current++;
			} else {
				clearInterval(timer);
			}
		}, 50);

		return () => clearInterval(timer);
	}, []);

	const scrollToProjects = () => {
		const element = document.querySelector("#projects");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToContact = () => {
		const element = document.querySelector("#contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
				<div className="text-center">
					{/* Animated greeting */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-4">
						<span className="text-[#00FF88] font-mono">
							Hi, my name is
						</span>
					</motion.div>

					{/* Name reveal */}
					<motion.h1
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-7xl lg:text-8xl mb-6 text-[#E5E7EB]">
						<span className="inline-block">
							<motion.span
								className="inline-block"
								animate={{
									textShadow: [
										"0 0 10px rgba(0, 255, 136, 0.5)",
										"0 0 20px rgba(0, 255, 136, 0.8)",
										"0 0 10px rgba(0, 255, 136, 0.5)",
									],
								}}
								transition={{ duration: 2, repeat: Infinity }}>
								Your Name
							</motion.span>
						</span>
					</motion.h1>

					{/* Typing effect tagline */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
						className="mb-8 h-12 flex items-center justify-center">
						<p className="text-xl md:text-2xl text-[#9CA3AF] font-mono">
							{displayedText}
							<motion.span
								animate={{ opacity: [1, 0, 1] }}
								transition={{ duration: 0.8, repeat: Infinity }}
								className="inline-block w-1 h-6 bg-[#00BFFF] ml-1"
							/>
						</p>
					</motion.div>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						className="text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-12">
						I craft immersive digital experiences with cutting-edge
						animations and robust full-stack solutions. Specializing
						in GSAP, Framer Motion, Three.js, and modern backend
						technologies.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={scrollToProjects}
							className="group relative px-8 py-4 bg-transparent border-2 border-[#00FF88] text-[#00FF88] rounded-lg overflow-hidden transition-all duration-300 hover:text-[#0A192F] flex items-center gap-2">
							<span className="absolute inset-0 bg-[#00FF88] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
							<span className="relative z-10">View My Work</span>
							<ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</motion.button>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={scrollToContact}
							className="group relative px-8 py-4 bg-transparent border-2 border-[#00BFFF] text-[#00BFFF] rounded-lg overflow-hidden transition-all duration-300 hover:text-[#0A192F] flex items-center gap-2">
							<span className="absolute inset-0 bg-[#00BFFF] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
							<span className="relative z-10">Let's Connect</span>
							<Mail className="relative z-10 w-5 h-5" />
						</motion.button>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.2 }}
						className="flex gap-6 justify-center mt-12">
						<motion.a
							whileHover={{ scale: 1.2, rotate: 5 }}
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#9CA3AF] hover:text-[#00FF88] transition-colors">
							<Github size={28} />
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.2, rotate: -5 }}
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#9CA3AF] hover:text-[#00BFFF] transition-colors">
							<Linkedin size={28} />
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.2, rotate: 5 }}
							href="mailto:your.email@example.com"
							className="text-[#9CA3AF] hover:text-[#00FF88] transition-colors">
							<Mail size={28} />
						</motion.a>
					</motion.div>

					{/* Scroll indicator */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, y: [0, 10, 0] }}
						transition={{
							delay: 1.4,
							y: { duration: 1.5, repeat: Infinity },
						}}
						className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
						<div className="w-6 h-10 border-2 border-[#00FF88] rounded-full flex justify-center">
							<motion.div
								animate={{ y: [0, 12, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
								className="w-1.5 h-1.5 bg-[#00FF88] rounded-full mt-2"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
