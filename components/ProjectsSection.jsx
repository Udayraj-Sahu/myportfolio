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
			id: 0,
			title: "ShortSync – Multi-Platform Reel Scheduler",
			description:
				"An automation tool that lets creators and startups upload Reels to Instagram and YouTube Shorts in one click — with auto captions, scheduling, and analytics.",
			longDescription:
				"ShortSync is a full-stack automation platform built for influencers, freelancers, and startups. It connects to Instagram and YouTube APIs, allowing users to upload once and publish Reels across both platforms automatically. Features include AI-generated captions, Google Sheets integration for tracking, scheduling, role-based dashboards, and status syncing in real-time. Built with Next.js, Node.js, MongoDB, and Cloudinary for high-performance automation without sharing any tokens or personal credentials. Each user retains complete ownership of their data.",
			image: "./shortSync.png",
			tech: [
				"Next.js",
				"TailwindCSS",
				"Node.js",
				"MongoDB",
				"Google Sheets API",
				"Instagram Graph API",
				"YouTube Data API",
				"Cloudinary",
				"AI Captions",
			],
			github: "https://github.com/Udayraj-Sahu/ShortSync",
			demo: "https://shortsync.vercel.app/",
			color: "#00FF88",
		},
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
			title: "Rishi Photography",
			description:
				"Capturing love stories with passion and artistry since 2015.",
			longDescription:
				"Sarah Williams Photography specializes in wedding photography, offering a blend of candid moments and artistic portraits to create timeless images. With over 9 years of experience, Sarah has captured over 500 weddings and 450 happy couples. The website showcases a portfolio of wedding, pre-wedding, reception, candid, and traditional photography, along with detailed service packages and client testimonials.",
			image: "https://colorlib.com/wp/wp-content/uploads/sites/2/wedding-photography-wordpress-themes-1024x745.jpg.avif",
			tech: ["Next.js", "TailwindCSS", "Vercel", "React", "Node.js"],
			github: "https://github.com/Udayraj-Sahu/port",
			demo: "https://rishi-photography.vercel.app/",
			color: "#00FF88",
		},
		{
			id: 5,
			title: "Job Portal",
			description:
				"A modern job portal built with Next.js and Supabase — connecting HRs and job seekers in one seamless flow.",
			longDescription:
				"The Job Portal streamlines recruitment by allowing job seekers to browse openings without logging in and apply directly via a simple form. HR professionals can manage postings and applications through secure authentication. Built using Next.js, Supabase, TailwindCSS, and Lucide React, the platform features responsive UI, real-time database sync, and smooth animations for an intuitive user experience.",
			image: "https://cdn.dribbble.com/userupload/15426623/file/original-7b528d8d1468c623ec937cf8ab7a1f95.png?resize=1024x768",
			tech: [
				"Next.js",
				"Supabase",
				"TailwindCSS",
				"Lucide React",
				"React Hook Form",
				"Framer Motion",
			],
			github: "https://github.com/Udayraj-Sahu/Job-Portals",
			demo: "https://job-portalss.vercel.app/",
			color: "#00FF88",
		},
		{
			id: 6,
			title: "GitHub Readme Writer (AI Extension)",
			description:
				"A Chrome extension that auto-generates professional README files using AI — saving hours of manual writing.",
			longDescription:
				"GitHub Readme Writer is a productivity-focused Chrome extension that analyzes your GitHub repository and automatically creates a polished README.md file. It detects tech stacks, dependencies, and key project structure, then uses AI (Mixtral 8x7B via OpenRouter) to generate a clear, professional README with zero effort. Designed with a clean popup UI, it includes options to preview, copy, or download instantly.",
			image: "https://cdn.dribbble.com/userupload/13946858/file/original-9b38c63d10f64b7fdf38d4ef65b15c2e.png?resize=1024x768",
			tech: [
				"JavaScript",
				"Chrome API",
				"HTML",
				"CSS",
				"AI (Mixtral via OpenRouter)",
			],
			github: "https://github.com/Udayraj-Sahu/extenstion",
			demo: "https://chrome.google.com/webstore",
			color: "#00FF88",
		},
	];

	return (
		<section ref={sectionRef} className="py-20 bg-black text-white">
			<h2 className="text-4xl font-bold text-center mb-12">
				Projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 40 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: project.id * 0.1 }}
						className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
					>
						<ImageWithFallback
							src={project.image}
							alt={project.title}
							className="w-full h-48 object-cover rounded-xl mb-4"
						/>
						<h3 className="text-xl font-semibold mb-2">
							{project.title}
						</h3>
						<p className="text-gray-400 mb-4">
							{project.description}
						</p>
						<div className="flex items-center gap-4">
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-green-400 hover:underline"
							>
								<ExternalLink size={16} /> Demo
							</a>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-gray-300 hover:text-white"
							>
								<Github size={16} /> Code
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
