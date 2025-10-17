"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import * as THREE from "three";

export function SkillsSection() {
	const sectionRef = useRef(null);
	const canvasRef = useRef(null);
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
			color: "#00BFFF",
		},
		{
			category: "Database",
			skills: ["Supabase", "NeonDB", "PostgreSQL", "MongoDB"],
			color: "#8B5CF6",
		},
		{
			category: "Tools",
			skills: ["GitHub", "Postman", "Vercel", "Docker", "VS Code"],
			color: "#F59E0B",
		},
	];

	useEffect(() => {
		if (!canvasRef.current || !isInView) return;

		// Three.js rotating sphere with skill logos
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
		camera.position.z = 15;

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		const size = Math.min(canvasRef.current.clientWidth, 400);
		renderer.setSize(size, size);
		renderer.setPixelRatio(window.devicePixelRatio);
		canvasRef.current.appendChild(renderer.domElement);

		// Create sphere with particles
		const geometry = new THREE.SphereGeometry(5, 32, 32);
		const material = new THREE.MeshBasicMaterial({
			color: 0x00ff88,
			wireframe: true,
			transparent: true,
			opacity: 0.3,
		});
		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);

		// Add skill nodes
		const nodeGeometry = new THREE.SphereGeometry(0.3, 16, 16);
		const nodes = [];

		skillCategories.forEach((category) => {
			category.skills.forEach((skill, index) => {
				const nodeMaterial = new THREE.MeshBasicMaterial({
					color: parseInt(category.color.replace("#", "0x")),
					transparent: true,
					opacity: 0.8,
				});
				const node = new THREE.Mesh(nodeGeometry, nodeMaterial);

				// Position nodes around the sphere
				const phi = Math.acos(
					-1 + (2 * index) / category.skills.length
				);
				const theta = Math.sqrt(category.skills.length * Math.PI) * phi;
				node.position.setFromSphericalCoords(6, phi, theta);

				nodes.push(node);
				scene.add(node);
			});
		});

		// Animation
		let mouseX = 0;
		let mouseY = 0;

		const handleMouseMove = (event) => {
			const rect = canvasRef.current?.getBoundingClientRect();
			if (rect) {
				mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
				mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
			}
		};

		canvasRef.current.addEventListener("mousemove", handleMouseMove);

		const animate = () => {
			requestAnimationFrame(animate);

			sphere.rotation.y += 0.005;
			sphere.rotation.x += 0.002;

			nodes.forEach((node, i) => {
				node.rotation.y += 0.01;
				node.rotation.x += 0.01;

				// Orbit around sphere
				const time = Date.now() * 0.001;
				const radius = 6;
				const angle = (i / nodes.length) * Math.PI * 2 + time * 0.2;
				node.position.x = Math.cos(angle) * radius;
				node.position.z = Math.sin(angle) * radius;
			});

			// Mouse interaction
			sphere.rotation.y += mouseX * 0.05;
			sphere.rotation.x += mouseY * 0.05;

			renderer.render(scene, camera);
		};

		animate();

		// Cleanup
		return () => {
			if (canvasRef.current) {
				canvasRef.current.removeChild(renderer.domElement);
			}
			renderer.dispose();
		};
	}, [isInView]);

	return (
		<section
			id="skills"
			ref={sectionRef}
			className="min-h-screen flex items-center py-20 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
						<span className="text-[#00BFFF]">02.</span>{" "}
						<span className="text-[#E5E7EB]">
							Skills & Technologies
						</span>
					</h2>
					<div className="w-32 h-1 bg-gradient-to-r from-[#00BFFF] to-[#8B5CF6] mx-auto rounded-full" />
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* 3D Visualization */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ duration: 0.8 }}
						className="flex justify-center">
						<div
							ref={canvasRef}
							className="w-full max-w-md aspect-square"
						/>
					</motion.div>

					{/* Skills List */}
					<div className="space-y-8">
						{skillCategories.map((category, catIndex) => (
							<motion.div
								key={category.category}
								initial={{ opacity: 0, x: 50 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: catIndex * 0.1 }}>
								<h3
									className="text-xl mb-4 flex items-center gap-2"
									style={{ color: category.color }}>
									<span
										className="w-8 h-0.5 rounded-full"
										style={{
											backgroundColor: category.color,
										}}
									/>
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
											whileHover={{ scale: 1.1, y: -5 }}
											onHoverStart={() =>
												setHoveredSkill(skill)
											}
											onHoverEnd={() =>
												setHoveredSkill(null)
											}
											className="relative px-4 py-2 bg-[#1C1C1C] border rounded-lg cursor-pointer transition-all duration-300"
											style={{
												borderColor:
													hoveredSkill === skill
														? category.color
														: "rgba(255, 255, 255, 0.1)",
												boxShadow:
													hoveredSkill === skill
														? `0 0 20px ${category.color}40`
														: "none",
											}}>
											<span className="text-[#E5E7EB]">
												{skill}
											</span>
											{hoveredSkill === skill && (
												<motion.div
													layoutId="skillGlow"
													className="absolute inset-0 rounded-lg opacity-20"
													style={{
														backgroundColor:
															category.color,
													}}
												/>
											)}
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
					<p className="text-[#9CA3AF] max-w-2xl mx-auto">
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
