'use client';
import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const MobileSearchBox = () => {
    const router = useRouter();
    const [openSearch, setOpenSearch] = useState(false);
    const [input, setInput] = useState("");

    function open() {
        setOpenSearch(true);
    }
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
            {/* for mobile */}
            <div className="md:hidden">
                <button onClick={open} className="bg-secondary">
                    <MagnifyingGlassIcon
                        title="Search"
                        width={30}
                        className="absolute top-[26px] text-white duration-100 hover:scale-125"
                    />
                </button>
                <Dialog
                    open={openSearch}
                    onClose={() => setOpenSearch(false)}
                    className="z-50"
                >
                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <DialogBackdrop className="fixed inset-0 bg-black/80" />

                    {/* Full-screen container to center the panel */}
                    <div className="absolute top-0 left-0 right-0">
                        {/* The actual dialog panel  */}
                        <DialogPanel className="w-full space-y-4 bg-gray-600 p-8">
                            <div className="relative group">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    type="text"
                                    placeholder="Search Products"
                                    className="ring-2 ring-primary p-2 rounded-lg outline-none w-full"
                                />
                                <button
                                    onClick={handleSearchForMobile}
                                    className="absolute text-white right-0 top-0 bg-primary h-full w-[60px] "
                                >
                                    <MagnifyingGlassIcon
                                        width={20}
                                        className="absolute left-2 top-0 size-10 text-color "
                                        color="black"
                                    />
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
        </>
    );
};

export default MobileSearchBox;