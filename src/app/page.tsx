import Banner from "@/components/homepage/Banner";
import Deals from "@/components/homepage/deals";
import FeaturedProduct from "@/components/homepage/FeaturedProducts";
import Process from "@/components/homepage/Process";
import Footer from "@/components/shared/Footer";
import TopNavigation from "@/components/shared/TopNavigation";
import React from "react";


export default async function HomePage() {

    return (
        <div className="bg-slate-900">
            <TopNavigation />
            <Banner />
            <Deals />
            <Process />
            <FeaturedProduct />
            <Footer />
        </div>
    );
}
