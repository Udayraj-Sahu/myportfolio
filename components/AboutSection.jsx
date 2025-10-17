'use client"'
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Code2, Palette, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

	const highlights = [
		{
			icon: Code2,
			title: "Full-Stack Expertise",
			description:
				"Building scalable applications with Next.js, Node.js, Express, and modern databases.",
		},
		{
			icon: Palette,
			title: "Motion Design",
			description:
				"Creating immersive experiences with GSAP, Framer Motion, and Three.js animations.",
		},
		{
			icon: Zap,
			title: "Problem Solver",
			description:
				"Turning complex challenges into elegant solutions with clean, maintainable code.",
		},
	];

	return (
		<section
			id="about"
			ref={sectionRef}
			className="min-h-screen flex items-center py-20 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
						<span className="text-[#00FF88]">01.</span>{" "}
						<span className="text-[#E5E7EB]">About Me</span>
					</h2>
					<div className="w-32 h-1 bg-gradient-to-r from-[#00FF88] to-[#00BFFF] mx-auto rounded-full" />
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<p className="text-[#9CA3AF] mb-6 leading-relaxed">
							I'm a passionate full-stack developer with a unique
							blend of technical expertise and creative vision. My
							journey in web development has led me to master not
							just the art of building robust backends and
							responsive frontends, but also the craft of bringing
							interfaces to life with stunning animations.
						</p>
						<p className="text-[#9CA3AF] mb-6 leading-relaxed">
							With deep expertise in modern frameworks like
							Next.js and React, combined with backend
							technologies like Node.js, Express, Prisma ORM, and
							databases such as Supabase and NeonDB, I create
							full-stack solutions that are both powerful and
							beautiful.
						</p>
						<p className="text-[#9CA3AF] mb-8 leading-relaxed">
							What sets me apart is my mastery of motion design
							libraries—GSAP, Framer Motion, and Three.js—which I
							use to transform static interfaces into immersive,
							interactive experiences that users remember.
						</p>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-4">
							{[
								{ label: "Projects", value: "50+" },
								{ label: "Technologies", value: "20+" },
								{ label: "Experience", value: "5+ yrs" },
							].map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={
										isInView ? { opacity: 1, scale: 1 } : {}
									}
									transition={{ delay: 0.4 + index * 0.1 }}
									className="text-center p-4 bg-[#1C1C1C] border border-[#00FF88]/20 rounded-lg">
									<div className="text-2xl text-[#00FF88] mb-1">
										{stat.value}
									</div>
									<div className="text-sm text-[#9CA3AF]">
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Image and Highlights */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="space-y-6">
						{/* Profile Image */}
						<div className="relative group">
							<div className="absolute -inset-1 bg-gradient-to-r from-[#00FF88] to-[#00BFFF] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
							<div className="relative bg-[#1C1C1C] rounded-lg overflow-hidden border border-[#00FF88]/20">
								<ImageWithFallback
									src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2RlfGVufDF8fHx8MTc2MDYzNjEwMXww&ixlib=rb-4.1.0&q=80&w=1080"
									alt="Developer workspace"
									className="w-full h-80 object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
							</div>
						</div>

						{/* Highlights */}
						<div className="space-y-4">
							{highlights.map((item, index) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, x: 20 }}
									animate={
										isInView ? { opacity: 1, x: 0 } : {}
									}
									transition={{ delay: 0.6 + index * 0.1 }}
									className="flex items-start gap-4 p-4 bg-[#1C1C1C] border border-[#00FF88]/20 rounded-lg hover:border-[#00FF88]/50 transition-all duration-300">
									<div className="flex-shrink-0 w-12 h-12 bg-[#00FF88]/10 rounded-lg flex items-center justify-center">
										<item.icon className="w-6 h-6 text-[#00FF88]" />
									</div>
									<div>
										<h3 className="text-[#E5E7EB] mb-1">
											{item.title}
										</h3>
										<p className="text-sm text-[#9CA3AF]">
											{item.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
