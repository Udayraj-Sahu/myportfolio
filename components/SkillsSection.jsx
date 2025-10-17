"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export function SkillsSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
	const [hoveredSkill, setHoveredSkill] = useState(null);

	const skillCategories = [
		{
			category: "Frontend",
			skills: [
				"Next.js",
				"React.js",
				"HTML",
				"CSS",
				"JavaScript",
				"GSAP",
				"Framer Motion",
				"Three.js",
			],
			color: "#00FF88",
		},
		{
			category: "Backend",
			skills: ["Node.js", "Express.js", "Prisma ORM", "Inngest"],
			color: "#00FF88",
		},
		{
			category: "Database",
			skills: ["Supabase", "NeonDB", "PostgreSQL", "MongoDB"],
			color: "#00FF88",
		},
		{
			category: "Tools",
			skills: ["GitHub", "Postman", "Vercel", "Docker", "VS Code"],
			color: "#00FF88",
		},
	];

	return (
		<section
			id="skills"
			ref={sectionRef}
			className=" bg-[#0B0F1A]/90  flex items-center py-30 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
						<span className="text-[#00FF88]">02.</span>{" "}
						<span className="text-[#E2E8F0]">
							Skills & Technologies
						</span>
					</h2>
					<div className="w-20 h-0.5 bg-[#00FF88] mx-auto" />
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Visual Element */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ duration: 0.8 }}
						className="flex justify-center">
						<div className="relative w-full max-w-md aspect-square">
							{/* Animated circles */}
							<div className="absolute inset-0 flex items-center justify-center">
								{[0, 1, 2, 3].map((index) => (
									<motion.div
										key={index}
										className="absolute border border-[#00FF88]/20 rounded-full"
										style={{
											width: `${80 - index * 15}%`,
											height: `${80 - index * 15}%`,
										}}
										animate={{
											rotate:
												index % 2 === 0 ? 360 : -360,
											scale: [1, 1.05, 1],
										}}
										transition={{
											rotate: {
												duration: 20 + index * 5,
												repeat: Infinity,
												ease: "linear",
											},
											scale: {
												duration: 3 + index,
												repeat: Infinity,
												ease: "easeInOut",
											},
										}}
									/>
								))}
							</div>

							{/* Center content */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center">
									<motion.div
										animate={{ scale: [1, 1.1, 1] }}
										transition={{
											duration: 2,
											repeat: Infinity,
										}}
										className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00FF88]/10 to-[#00FF88]/5 border border-[#00FF88]/30 flex items-center justify-center">
										<span className="text-4xl">⚡</span>
									</motion.div>
									<p className="text-[#94A3B8] text-sm">
										Mastering Modern
										<br />
										Technologies
									</p>
								</div>
							</div>

							{/* Floating skill badges */}
							{["React", "Node.js", "Three.js", "GSAP"].map(
								(skill, index) => (
									<motion.div
										key={skill}
										className="absolute px-3 py-1 bg-[#141824] border border-[#1E293B] rounded-lg text-sm text-[#00FF88]"
										style={{
											top: `${[10, 20, 70, 80][index]}%`,
											left: `${[10, 80, 15, 75][index]}%`,
										}}
										animate={{
											y: [0, -10, 0],
										}}
										transition={{
											duration: 2 + index * 0.5,
											repeat: Infinity,
											ease: "easeInOut",
										}}>
										{skill}
									</motion.div>
								)
							)}
						</div>
					</motion.div>

					{/* Skills List */}
					<div className="space-y-8">
						{skillCategories.map((category, catIndex) => (
							<motion.div
								key={category.category}
								initial={{ opacity: 0, x: 50 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: catIndex * 0.1 }}>
								<h3 className="text-xl mb-4 flex items-center gap-3 text-[#E2E8F0]">
									<span className="w-8 h-0.5 bg-[#00FF88]" />
									{category.category}
								</h3>
								<div className="flex flex-wrap gap-3">
									{category.skills.map((skill, index) => (
										<motion.div
											key={skill}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={
												isInView
													? { opacity: 1, scale: 1 }
													: {}
											}
											transition={{
												delay:
													catIndex * 0.1 +
													index * 0.05,
											}}
											whileHover={{ scale: 1.05, y: -2 }}
											onHoverStart={() =>
												setHoveredSkill(skill)
											}
											onHoverEnd={() =>
												setHoveredSkill(null)
											}
											className="relative px-4 py-2 bg-[#141824] border border-[#1E293B] rounded-lg cursor-pointer transition-all duration-300"
											style={{
												borderColor:
													hoveredSkill === skill
														? category.color
														: "#1E293B",
											}}>
											<span
												className={`${
													hoveredSkill === skill
														? "text-[#00FF88]"
														: "text-[#94A3B8]"
												} transition-colors duration-300`}>
												{skill}
											</span>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Additional Info */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.6 }}
					className="mt-16 text-center">
					<p className="text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
						Continuously learning and exploring new technologies to
						stay at the cutting edge of web development. Currently
						diving deeper into WebGL, advanced animation techniques,
						and serverless architectures.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
