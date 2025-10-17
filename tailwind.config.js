/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: "var(--card)",
				"card-foreground": "var(--card-foreground)",
				primary: "var(--primary)",
				"primary-foreground": "var(--primary-foreground)",
				secondary: "var(--secondary)",
				"secondary-foreground": "var(--secondary-foreground)",
				muted: "var(--muted)",
				"muted-foreground": "var(--muted-foreground)",
				accent: "var(--accent)",
				"accent-foreground": "var(--accent-foreground)",
				destructive: "var(--destructive)",
				"destructive-foreground": "var(--destructive-foreground)",
				border: "var(--border)",
				input: "var(--input)",
				"input-background": "var(--input-background)",
				ring: "var(--ring)",
				chart: {
					1: "var(--chart-1)",
					2: "var(--chart-2)",
					3: "var(--chart-3)",
					4: "var(--chart-4)",
					5: "var(--chart-5)",
				},
				sidebar: "var(--sidebar)",
				"sidebar-foreground": "var(--sidebar-foreground)",
				"sidebar-primary": "var(--sidebar-primary)",
				"sidebar-primary-foreground":
					"var(--sidebar-primary-foreground)",
				"sidebar-accent": "var(--sidebar-accent)",
				"sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
				"sidebar-border": "var(--sidebar-border)",
				"sidebar-ring": "var(--sidebar-ring)",
			},
			fontFamily: {
				sans: ["Outfit", "system-ui", "sans-serif"],
				heading: ["Orbitron", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
			},
			borderRadius: {
				sm: "calc(var(--radius) - 4px)",
				md: "calc(var(--radius) - 2px)",
				lg: "var(--radius)",
				xl: "calc(var(--radius) + 4px)",
			},
		},
	},
	plugins: [],
};

export default config;
