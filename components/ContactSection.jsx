"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Send, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [focusedField, setFocusedField] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call - In production, this would connect to Supabase
		await new Promise((resolve) => setTimeout(resolve, 1500));

		console.log("Form submitted:", formData);
		setIsSubmitting(false);
		setSubmitted(true);
		setFormData({ name: "", email: "", message: "" });

		// Reset success message after 3 seconds
		setTimeout(() => setSubmitted(false), 3000);
	};

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "udayrajsahu123@gmail.com",
			href: "mailto:udayrajsahu123@gmail.com",
			color: "#00FF88",
		},
		{
			icon: Phone,
			label: "Phone",
			value: "+917440594711",
			href: "tel:+917440594711",
			color: "#00BFFF",
		},
		{
			icon: MapPin,
			label: "Location",
			value: "Indore, India",
			href: null,
			color: "#8B5CF6",
		},
	];

	const socialLinks = [
		{
			icon: Github,
			label: "GitHub",
			href: "https://github.com/Udayraj-Sahu",
			color: "#00FF88",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/udayraj-sahu/",
			color: "#00BFFF",
		},
		{
			icon: Mail,
			label: "Email",
			href: "mailto:udayrajsahu123@gmail.com",
			color: "#8B5CF6",
		},
	];

	return (
		<section
			id="contact"
			ref={sectionRef}
			className=" bg-[#0B0F1A]/90  flex items-center py-20 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
						<span className="text-[#00FF88]">04.</span>{" "}
						<span className="text-[#E2E8F0]">Get In Touch</span>
					</h2>
					<div className="w-20 h-0.5 bg-[#00FF88] mx-auto" />
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.2 }}>
						<div className="bg-[#141824] p-8 rounded-lg border border-[#1E293B]">
							<h3 className="text-2xl text-[#E2E8F0] mb-6">
								Send Me a Message
							</h3>

							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Name Field */}
								<div>
									<label
										htmlFor="name"
										className="block text-[#E2E8F0] mb-2">
										Name
									</label>
									<input
										type="text"
										id="name"
										value={formData.name}
										onChange={(e) =>
											setFormData({
												...formData,
												name: e.target.value,
											})
										}
										onFocus={() => setFocusedField("name")}
										onBlur={() => setFocusedField(null)}
										required
										className="w-full px-4 py-3 bg-[#0B0F1A] border border-[#1E293B] rounded-lg text-[#E2E8F0] focus:outline-none focus:border-[#00FF88] transition-colors"
										placeholder="Your name"
									/>
								</div>

								{/* Email Field */}
								<div>
									<label
										htmlFor="email"
										className="block text-[#E2E8F0] mb-2">
										Email
									</label>
									<input
										type="email"
										id="email"
										value={formData.email}
										onChange={(e) =>
											setFormData({
												...formData,
												email: e.target.value,
											})
										}
										onFocus={() => setFocusedField("email")}
										onBlur={() => setFocusedField(null)}
										required
										className="w-full px-4 py-3 bg-[#0B0F1A] border border-[#1E293B] rounded-lg text-[#E2E8F0] focus:outline-none focus:border-[#00FF88] transition-colors"
										placeholder="your.email@example.com"
									/>
								</div>

								{/* Message Field */}
								<div>
									<label
										htmlFor="message"
										className="block text-[#E2E8F0] mb-2">
										Message
									</label>
									<textarea
										id="message"
										value={formData.message}
										onChange={(e) =>
											setFormData({
												...formData,
												message: e.target.value,
											})
										}
										onFocus={() =>
											setFocusedField("message")
										}
										onBlur={() => setFocusedField(null)}
										required
										rows={5}
										className="w-full px-4 py-3 bg-[#0B0F1A] border border-[#1E293B] rounded-lg text-[#E2E8F0] focus:outline-none focus:border-[#00FF88] transition-colors resize-none"
										placeholder="Your message..."
									/>
								</div>

								{/* Submit Button */}
								<motion.button
									type="submit"
									disabled={isSubmitting}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full py-4 bg-[#00FF88] text-[#0B0F1A] rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
									{isSubmitting ? (
										<motion.div
											animate={{ rotate: 360 }}
											transition={{
												duration: 1,
												repeat: Infinity,
												ease: "linear",
											}}
											className="w-6 h-6 border-2 border-[#0A192F] border-t-transparent rounded-full"
										/>
									) : (
										<>
											<Send size={20} />
											<span>Send Message</span>
										</>
									)}
								</motion.button>

								{/* Success Message */}
								{submitted && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className="p-4 bg-[#00FF88]/10 border border-[#00FF88] rounded-lg text-[#00FF88] text-center">
										Message sent successfully! I'll get back
										to you soon.
									</motion.div>
								)}
							</form>
						</div>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.2 }}
						className="space-y-8">
						{/* Info Cards */}
						<div className="space-y-4">
							{contactInfo.map((info, index) => (
								<motion.div
									key={info.label}
									initial={{ opacity: 0, x: 20 }}
									animate={
										isInView ? { opacity: 1, x: 0 } : {}
									}
									transition={{ delay: 0.3 + index * 0.1 }}
									whileHover={{ scale: 1.02, x: 10 }}
									className="bg-[#1C1C1C] p-6 rounded-lg border border-[#00FF88]/20 hover:border-opacity-50 transition-all duration-300"
									style={{
										boxShadow: `0 0 0px ${info.color}00`,
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.boxShadow = `0 0 20px ${info.color}40`;
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.boxShadow = `0 0 0px ${info.color}00`;
									}}>
									<div className="flex items-center gap-4">
										<div
											className="w-12 h-12 rounded-lg flex items-center justify-center"
											style={{
												backgroundColor: `${info.color}20`,
											}}>
											<info.icon
												size={24}
												style={{ color: info.color }}
											/>
										</div>
										<div>
											<div className="text-sm text-[#9CA3AF]">
												{info.label}
											</div>
											{info.href ? (
												<a
													href={info.href}
													className="text-[#E5E7EB] hover:text-[#00FF88] transition-colors">
													{info.value}
												</a>
											) : (
												<div className="text-[#E5E7EB]">
													{info.value}
												</div>
											)}
										</div>
									</div>
								</motion.div>
							))}
						</div>

						{/* Social Links */}
						<div className="bg-[#1C1C1C] p-8 rounded-lg border border-[#00FF88]/20">
							<h3 className="text-xl text-[#E5E7EB] mb-6">
								Connect With Me
							</h3>
							<div className="flex gap-4">
								{socialLinks.map((social, index) => (
									<motion.a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={
											isInView
												? { opacity: 1, scale: 1 }
												: {}
										}
										transition={{
											delay: 0.6 + index * 0.1,
										}}
										whileHover={{ scale: 1.2, rotate: 5 }}
										className="w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300"
										style={{
											backgroundColor: `${social.color}20`,
											border: `1px solid ${social.color}40`,
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.backgroundColor =
												social.color;
											e.currentTarget.style.color =
												"#0A192F";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.backgroundColor = `${social.color}20`;
											e.currentTarget.style.color =
												social.color;
										}}>
										<social.icon
											size={24}
											style={{ color: social.color }}
										/>
									</motion.a>
								))}
							</div>
						</div>

						{/* CTA */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.8 }}
							className="bg-gradient-to-r from-[#00FF88]/10 to-[#00BFFF]/10 p-8 rounded-lg border border-[#00FF88]/20">
							<h3 className="text-xl text-[#E5E7EB] mb-3">
								Let's Build Something Amazing
							</h3>
							<p className="text-[#9CA3AF] mb-4">
								I'm always open to discussing new projects,
								creative ideas, or opportunities to be part of
								your vision.
							</p>
							<div className="flex gap-2">
								<div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
								<span className="text-sm text-[#00FF88]">
									Available for freelance work
								</span>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
