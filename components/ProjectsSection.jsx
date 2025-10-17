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
			title: "GoCart",
			description:
				"A multi-vendor e-commerce platform with AI-assisted product listing and advanced management dashboards.",
			longDescription:
				"GoCart is a full-fledged multi-vendor e-commerce platform. Vendors can register, manage products, and sell through AI-assisted product listings that generate names and descriptions from images using OpenAI. Customers can browse, apply coupons, place orders, and track shipments. The platform includes vendor dashboards, an admin panel, and responsive UI for a seamless experience across devices. Built with Next.js, TailwindCSS, Prisma, Redux, and integrated with Stripe for payments.",
			image: "https://images.unsplash.com/photo-1720962158937-7ea890052166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjA1OTg4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
			tech: [
				"Next.js",
				"TailwindCSS",
				"Prisma ORM",
				"Redux Toolkit",
				"Clerk",
				"Stripe",
				"OpenAI API",
				"Axios",
				"Lucide React",
				"React Hot Toast",
			],
			github: "https://github.com/Udayraj-Sahu/GoCart",
			demo: "https://go-cart-sooty.vercel.app/",
			color: "#00FF88",
		},
		{
			id: 2,
			title: "360 Degree Café Rebuild",
			description:
				"An immersive virtual café experience featuring a 360° interactive tour with cinematic storytelling.",
			longDescription:
				"The 360 Degree Café Rebuild offers a fully interactive 3D exploration of a café environment, designed to provide users with a cinematic and immersive experience. Utilizing Next.js and Three.js, the platform allows users to navigate through a meticulously crafted virtual space, experiencing dynamic lighting, spatial audio, and detailed textures that bring the café's ambiance to life. This project showcases the potential of WebGL and modern web technologies in creating engaging virtual environments.",
			image: "https://thearchitectsdiary.com/wp-content/uploads/2025/03/interior-design-of-cafe.png",
			tech: [
				"Next.js",
				"Three.js",
				"WebGL",
				"TailwindCSS",
				"GSAP",
				"Framer Motion",
			],
			github: "https://github.com/Udayraj-Sahu/360-cafe",
			demo: "https://360-degree-cafe-rebuild.vercel.app/",
			color: "#00FF88",
		},
		{
			id: 3,
			title: "The Bros Company",
			description:
				"A comprehensive adventure sports platform offering lessons in kitesurfing, wakeboarding, surfing, and more across Sardinia.",
			longDescription:
				"The Bros Company provides a wide range of water and land-based adventure sports experiences in Sardinia. Their offerings include kitesurfing, wakeboarding, surfing, SUP, trekking, and enduro biking. The platform features an intuitive booking system, detailed information about each activity, and a reservation form to tailor experiences to individual preferences. Customers can choose their skill level, preferred activity, and desired start time, ensuring a personalized adventure.",
			image: "https://imgs.search.brave.com/Ql_AXSS027Y4E2aeiZfZyqLVJu-96htFIWq95Tk-zFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MzQ5MDE5MjYvZmls/ZS9vcmlnaW5hbC01/YWRlZDU3MWU1MmNk/N2YxNmFiNTEyMWNk/ZjEwYTEyNi5wbmc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy",
			tech: ["Next.js", "TailwindCSS", "Vercel", "React", "Node.js"],
			github: "https://github.com/Udayraj-Sahu/TheBrosCompany",
			demo: "https://the-bros-company.vercel.app/",
			color: "#00FF88",
		},
		{
			id: 4,
			title: "Job Portal",
			description:
				"A modern job portal platform for Silk Chi, offering seamless job search and application experiences.",
			longDescription:
				"Job Portal Silk Chi is a user-friendly platform designed to connect job seekers with opportunities at Silk Chi. The portal features advanced search filters, job listings categorized by department, and an intuitive application process. Built with Next.js and TailwindCSS, it ensures a responsive and fast user experience across devices.",
			image: "https://job-portal-silk-chi.vercel.app/thumbnail.jpg",
			tech: ["Next.js", "TailwindCSS", "Vercel", "React", "Node.js"],
			github: "https://github.com/Udayraj-Sahu/job-portal",
			demo: "https://job-portal-silk-chi.vercel.app/",
			color: "#00FF88",
		},
	];

	return (
		<section
			id="projects"
			ref={sectionRef}
			className="min-h-screen bg-[#0B0F1A]/90  flex items-center py-20 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
						<span className="text-[#00FF88]">03.</span>{" "}
						<span className="text-[#E2E8F0]">
							Featured Projects
						</span>
					</h2>
					<div className="w-20 h-0.5 bg-[#00FF88] mx-auto" />
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
							whileHover={{ y: -8 }}
							onClick={() => setSelectedProject(project)}
							className="group relative bg-[#141824] rounded-lg overflow-hidden cursor-pointer border border-[#1E293B] hover:border-[#00FF88]/50 transition-all duration-300">
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
								<h3 className="text-xl mb-2 text-[#E2E8F0] group-hover:text-[#00FF88] transition-colors duration-300">
									{project.title}
								</h3>
								<p className="text-[#94A3B8] text-sm mb-4 leading-relaxed">
									{project.description}
								</p>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-xs rounded-md bg-[#1E293B] text-[#94A3B8] border border-[#334155]">
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
