"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("term");

  function selectTab(tab) {
    router.push(
      `/search/${
        tab.toLowerCase() === "images" ? "image" : "web"
      }?term=${searchTerm}`
    );
  }

  return (
    <div className="flex space-x-2 select-none border-b w-ful justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
        onClick={() => selectTab("All")}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
        onClick={() => selectTab("Images")}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
