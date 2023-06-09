import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

export const metadata = {
  title: "Gloogle Clone",
  description: "Google clone created with Next.js 13 and Tailwind CSS 3",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function SearchLayout({ children }) {
  return (
    <main>
      <SearchHeader />
      {children}
    </main>
  );
}
