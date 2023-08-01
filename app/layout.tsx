import "./globals.css";
import { Nav, Footer } from "@components";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				{/* TODO: ADD AUTH*/}
				<Nav />
				<>{children}</>
				<Footer />
			</body>
		</html>
	);
}
