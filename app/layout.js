import "./globals.css";

export const metadata = {
	title: "My Portfolio",
	description:
		"A showcase of my projects and skills as a full-stack developer.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
