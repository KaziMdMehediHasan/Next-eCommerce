"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
    const router = useRouter();
    const [input, setInput] = useState("");
    const [openSearch, setOpenSearch] = useState(false);

    function open() {
        setOpenSearch(true);
    }
    const handleSearch = () => {
        if (input) {
            router.push(`/product?search=${input}`);
        } else {
            router.push(`/product`);
        }
    };
    const handleSearchForMobile = () => {
        if (input) {
            router.push(`/product?search=${input}`);
        } else {
            router.push(`/product`);
        }
        setOpenSearch(false);
    };
    return (
        <>
            {/* for desktop */}
            <div className="hidden md:block">
                <div className="flex items-center justify-center max-w-xl bg-light-gray rounded-lg overflow-hidden h-12">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Search products..."
                        className="pl-8 w-full h-full outline-none text-gray-500 border-none focus:ring-0 ring-0"
                    />
                    <button
                        className="btn primary w-[80px] h-full group"
                        onClick={handleSearch}
                    >
                        <MagnifyingGlassIcon
                            width={30}
                            className="mx-auto text-background  transition-transform duration-100 ease-in group-hover:scale-125"
                        />
                    </button>
                </div>
            </div>
        </>
    );
}
