import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import Silder from "./Silder";

const Reviews = () => {
    return (
        <div className="pt-16 pb-16 bg-[#0f0715]">
            <SectionHeading>Reviews</SectionHeading>
            <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
                <Silder />
            </div>
        </div>
    );
};

export default Reviews