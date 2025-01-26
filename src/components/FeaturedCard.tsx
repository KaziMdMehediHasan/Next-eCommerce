import { TDummyProduct, } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedCard({
    product,
}: {
    // product: TProductResponse;
    product: TDummyProduct;
}) {
    return (
        <Link href={`/product/${product.id}`} className="no-underline" >
            <section>
                <div className="text-gray-200 bg-white/5 backdrop-blur-lg border border-slate-100/10 shadow-sm hover:shadow-slate-100/20 space-y-2 rounded-xl">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-8">
                        <Image
                            width={200}
                            height={300}
                            alt="product-name"
                            src={product?.image}
                            className="w-full h-full object-cover object-center group-hover:opacity-75 hover:scale-105 duration-500 transition-all"
                        />
                    </div>
                    <div className="space-y-3 p-3">
                        <p className="text-lg text-gray-200 hover:text-primary">
                            {product?.title.slice(0, 20)}
                        </p>
                        <p className="text-sm text-gray-200 hover:text-primary font-light">
                            {product?.description.slice(0, 70)}
                        </p>
                        <p className="mt-2 text-xl font-bold text-center text-primary">
                            ${product?.price}
                        </p>
                    </div>
                </div>
            </section>
        </Link>

    );
}
