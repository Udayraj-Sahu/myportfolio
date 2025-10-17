"use client";
import { motion } from "motion/react";
import { Heart, Code } from "lucide-react";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative py-12 border-t border-[#00FF88]/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-6">
						<span className="text-3xl font-mono">
							<span className="text-[#00FF88]">{"<"}</span>
							<span className="text-[#E5E7EB]">Dev</span>
							<span className="text-[#00BFFF]">/</span>
							<span className="text-[#00FF88]">{">"}</span>
						</span>
					</motion.div>

					{/* Quote */}
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-[#9CA3AF] max-w-md mx-auto mb-6 italic">
						"Code is like humor. When you have to explain it, it's
						bad."
					</motion.p>

					{/* Made with love */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="flex items-center justify-center gap-2 text-[#9CA3AF] mb-4">
						<span>Designed & Built with</span>
						<motion.div
							animate={{
								scale: [1, 1.2, 1],
							}}
							transition={{
								duration: 1,
								repeat: Infinity,
								repeatDelay: 1,
							}}>
							<Heart
								size={16}
								className="text-[#EF4444] fill-[#EF4444]"
							/>
						</motion.div>
						<span>and</span>
						<Code size={16} className="text-[#00FF88]" />
					</motion.div>

					{/* Copyright */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
						className="text-sm text-[#9CA3AF]">
						© {currentYear} Your Name. All rights reserved.
					</motion.div>

					{/* Tech Stack */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5 }}
						className="mt-6 text-xs text-[#9CA3AF]">
						<span className="font-mono">
							Built with Next.js, React, Three.js, GSAP, Framer
							Motion & TailwindCSS
						</span>
					</motion.div>
				</div>

				{/* Decorative line */}
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="mt-8 h-px bg-gradient-to-r from-transparent via-[#00FF88] to-transparent"
				/>
			</div>
		</footer>
	);
}
