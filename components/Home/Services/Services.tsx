import SectionHeading from "@/components/Helper/SectionHeading";
import { servicesData } from "@/Data/data";
import ServiceCard from "./ServiceCard";
import React from "react";

const Services = () => {
    return (
        <div className="pt-16 pb-16 bg-[#0f0715]">
            <SectionHeading>Services</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto tiems-center mt-20">
                {servicesData.map((service,i) => {
                    return (
                        <div key={service.id} data-aos="fade-left" data-aos-anchor-placment="top-center" data-aos-delay={`${i * 150}`}>
                            <ServiceCard service={service} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;