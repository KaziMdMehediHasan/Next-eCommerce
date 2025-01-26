import "./globals.css";

import { Roboto_Condensed } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const roboto = Roboto_Condensed({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
	title: "Home | SportGym",
	description:
		"Discover the best deals Sports items. Shop now and get the best deals on high-quality sports equipment, apparel, and accessories.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={roboto.className}>
			<body className="bg-background text-slate-800">
				<main>{children}</main>
			</body>
		</html>
	);
}
