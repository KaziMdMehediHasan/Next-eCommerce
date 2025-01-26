import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
    return (
        <section className="relative h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/banner-img-2.jpg"
                    alt="Sports Equipment"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/20" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex h-full items-center px-6 md:px-12">
                <div className="max-w-2xl text-white">
                    <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                        Premium Sports Equipment for Champions
                    </h2>
                    <p className="mb-8 text-lg md:text-xl">
                        Elevate your performance with professional-grade gear. Shop our curated collection of high-quality sports equipment and accessories.
                    </p>
                    <Link
                        href="/product"
                        className="inline-block rounded-lg bg-primary-500 py-3 font-semibold uppercase tracking-wide transition hover:bg-primary-600"
                    >
                        <button className="bg-primary hover:bg-indigo-500 px-7 py-4 rounded-lg">

                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
