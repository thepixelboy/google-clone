import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Gloogle Clone",
  description: "Google clone created with Next.js 13 and Tailwind CSS 3",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}

        <Footer />
      </body>
    </html>
  );
}
