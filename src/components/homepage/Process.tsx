import { processData } from "@/staticResources/dummyData";
import React from "react";
type TCardProps = {
    process: {
        title: string;
        description: string;
        icon: any;
    };
};

export default function Process() {
    return (
        <section className="max-w-7xl mx-auto px-4 xl:px-0 py-10 md:py-6 text-gray-200">
            <h2 className="text-center mb-10">Straight Forward Purchase</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {processData.map((process) => (
                    <ProcessCard process={process} key={process.title} />
                ))}
            </div>
        </section>
    );
}

const ProcessCard = ({ process }: TCardProps) => {
    return (
        <div
            className="text-gray-200 p-10 bg-white/5 backdrop-blur-lg border border-slate-100/10 shadow-sm hover:shadow-slate-100/20 space-y-2 rounded-xl hover:scale-105 duration-150 transition-all"
        >
            <div>
                <process.icon className="size-20 w-fit mx-auto text-primary" />
            </div>
            <h4 className="text-center">{process.title}</h4>
            <p className="text-center font-light">{process.description}</p>
        </div>
    );
};
