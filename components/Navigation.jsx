"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	const scrollToSection = (href) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
					isScrolled
						? "bg-[#0B0F1A]/90 backdrop-blur-md border-b border-[#1E293B]"
						: ""
				}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Logo */}
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="cursor-pointer">
							<span className="text-2xl tracking-wide">
								<span className="text-[#00FF88]">{"<"}</span>
								<span className="text-[#E2E8F0]">DEV</span>
								<span className="text-[#00FF88]">{">"}</span>
							</span>
						</motion.div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex space-x-8">
							{navItems.map((item, index) => (
								<motion.button
									key={item.name}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ scale: 1.1 }}
									onClick={() => scrollToSection(item.href)}
									className="text-[#E5E7EB] hover:text-[#00FF88] transition-colors relative group">
									{item.name}
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF88] group-hover:w-full transition-all duration-300" />
								</motion.button>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							className="md:hidden text-[#00FF88] p-2">
							{isMobileMenuOpen ? (
								<X size={24} />
							) : (
								<Menu size={24} />
							)}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<motion.div
				initial={false}
				animate={{
					opacity: isMobileMenuOpen ? 1 : 0,
					x: isMobileMenuOpen ? 0 : "100%",
				}}
				transition={{ duration: 0.3 }}
				className="fixed top-16 right-0 bottom-0 w-64 bg-[#0A192F]/95 backdrop-blur-lg border-l border-[#00FF88]/20 z-40 md:hidden">
				<div className="flex flex-col p-6 space-y-6">
					{navItems.map((item, index) => (
						<motion.button
							key={item.name}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 }}
							onClick={() => scrollToSection(item.href)}
							className="text-[#E5E7EB] hover:text-[#00FF88] transition-colors text-left">
							{item.name}
						</motion.button>
					))}
				</div>
			</motion.div>
		</>
	);
}
