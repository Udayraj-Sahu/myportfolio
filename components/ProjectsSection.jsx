"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ExternalLink, Github, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
	const [selectedProject, setSelectedProject] = useState(null);

	const projects = [
		{
			id: 1,
			title: "Immersive Portfolio Platform",
			description:
				"A cutting-edge portfolio platform with 3D interactions and advanced animations.",
			longDescription:
				"Built with Next.js and Three.js, this platform showcases creative work through immersive 3D experiences. Features include dynamic particle systems, scroll-triggered animations with GSAP, and smooth page transitions with Framer Motion.",
			image: "https://images.unsplash.com/photo-1720962158937-7ea890052166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjA1OTg4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
			tech: [
				"Next.js",
				"Three.js",
				"GSAP",
				"Framer Motion",
				"TailwindCSS",
			],
			github: "https://github.com",
			demo: "https://demo.com",
			color: "#00FF88",
		},
		{
			id: 2,
			title: "Real-time Collaboration Tool",
			description:
				"Full-stack application for team collaboration with real-time updates.",
			longDescription:
				"A comprehensive collaboration platform built with Node.js, Express, and Supabase. Features real-time data synchronization, user authentication, role-based access control, and event-driven workflows powered by Inngest.",
			image: "https://images.unsplash.com/photo-1758598497143-84a0cfdc9958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjA2MDM3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
			tech: [
				"Node.js",
				"Express",
				"Supabase",
				"Prisma",
				"Inngest",
				"React",
			],
			github: "https://github.com",
			demo: "https://demo.com",
			color: "#00BFFF",
		},
		{
			id: 3,
			title: "E-Commerce Dashboard",
			description:
				"Analytics dashboard with beautiful charts and real-time data visualization.",
			longDescription:
				"An advanced admin dashboard featuring interactive charts, real-time analytics, and comprehensive product management. Built with React, Recharts for data visualization, and integrated with a robust backend API.",
			image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2RlfGVufDF8fHx8MTc2MDYzNjEwMXww&ixlib=rb-4.1.0&q=80&w=1080",
			tech: ["React", "Recharts", "NeonDB", "TailwindCSS", "REST API"],
			github: "https://github.com",
			demo: "https://demo.com",
			color: "#8B5CF6",
		},
		{
			id: 4,
			title: "Mobile-First PWA",
			description:
				"Progressive web app optimized for mobile with offline capabilities.",
			longDescription:
				"A responsive Progressive Web App that works seamlessly across all devices. Features include offline functionality, push notifications, service worker caching, and an app-like experience on mobile devices.",
			image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYwNTk5MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
			tech: [
				"React",
				"Service Workers",
				"IndexedDB",
				"Push API",
				"Motion",
			],
			github: "https://github.com",
			demo: "https://demo.com",
			color: "#F59E0B",
		},
	];

	return (
		<section
			id="projects"
			ref={sectionRef}
			className="min-h-screen flex items-center py-20 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
						<span className="text-[#8B5CF6]">03.</span>{" "}
						<span className="text-[#E5E7EB]">
							Featured Projects
						</span>
					</h2>
					<div className="w-32 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] mx-auto rounded-full" />
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 50, rotateY: -10 }}
							animate={
								isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}
							}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							whileHover={{ y: -10, scale: 1.02 }}
							onClick={() => setSelectedProject(project)}
							className="group relative bg-[#1C1C1C] rounded-lg overflow-hidden cursor-pointer border border-transparent hover:border-opacity-50 transition-all duration-300"
							style={{
								borderColor: `${project.color}00`,
							}}>
							{/* Project Image */}
							<div className="relative h-64 overflow-hidden">
								<ImageWithFallback
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/50 to-transparent" />

								{/* Hover overlay */}
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									className="absolute inset-0 flex items-center justify-center gap-4"
									style={{
										backgroundColor: `${project.color}20`,
									}}>
									<motion.a
										whileHover={{ scale: 1.2 }}
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										className="p-3 bg-[#1C1C1C] rounded-full text-[#E5E7EB] hover:text-[#00FF88] transition-colors">
										<Github size={24} />
									</motion.a>
									<motion.a
										whileHover={{ scale: 1.2 }}
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										className="p-3 bg-[#1C1C1C] rounded-full text-[#E5E7EB] hover:text-[#00BFFF] transition-colors">
										<ExternalLink size={24} />
									</motion.a>
								</motion.div>
							</div>

							{/* Project Info */}
							<div className="p-6">
								<h3 className="text-xl mb-2 text-[#E5E7EB] group-hover:text-[#00FF88] transition-colors">
									{project.title}
								</h3>
								<p className="text-[#9CA3AF] text-sm mb-4">
									{project.description}
								</p>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-xs rounded-full border"
											style={{
												borderColor: `${project.color}40`,
												color: project.color,
												backgroundColor: `${project.color}10`,
											}}>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Glow effect on hover */}
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
								style={{
									boxShadow: `0 0 40px ${project.color}40`,
								}}
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* Project Detail Modal */}
			<AnimatePresence>
				{selectedProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedProject(null)}
						className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
							className="bg-[#1C1C1C] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border"
							style={{
								borderColor: `${selectedProject.color}40`,
							}}>
							{/* Close button */}
							<button
								onClick={() => setSelectedProject(null)}
								className="absolute top-4 right-4 p-2 bg-[#0A192F] rounded-full text-[#E5E7EB] hover:text-[#00FF88] transition-colors">
								<X size={24} />
							</button>

							{/* Image */}
							<div className="relative h-80">
								<ImageWithFallback
									src={selectedProject.image}
									alt={selectedProject.title}
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] to-transparent" />
							</div>

							{/* Content */}
							<div className="p-8">
								<h2
									className="text-3xl mb-4"
									style={{ color: selectedProject.color }}>
									{selectedProject.title}
								</h2>
								<p className="text-[#9CA3AF] mb-6 leading-relaxed">
									{selectedProject.longDescription}
								</p>

								{/* Tech Stack */}
								<div className="mb-6">
									<h3 className="text-lg text-[#E5E7EB] mb-3">
										Technologies Used
									</h3>
									<div className="flex flex-wrap gap-2">
										{selectedProject.tech.map((tech) => (
											<span
												key={tech}
												className="px-4 py-2 rounded-lg border"
												style={{
													borderColor: `${selectedProject.color}40`,
													color: selectedProject.color,
													backgroundColor: `${selectedProject.color}10`,
												}}>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Links */}
								<div className="flex gap-4">
									<a
										href={selectedProject.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-6 py-3 bg-[#0A192F] border border-[#00FF88] text-[#00FF88] rounded-lg hover:bg-[#00FF88] hover:text-[#0A192F] transition-all duration-300">
										<Github size={20} />
										View Code
									</a>
									<a
										href={selectedProject.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-6 py-3 bg-[#0A192F] border border-[#00BFFF] text-[#00BFFF] rounded-lg hover:bg-[#00BFFF] hover:text-[#0A192F] transition-all duration-300">
										<ExternalLink size={20} />
										Live Demo
									</a>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
