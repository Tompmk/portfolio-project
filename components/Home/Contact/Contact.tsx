import React from "react";
import ContactFrom from "./ContactFrom";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <div className="pt-16 pb-16 bg-[#050709]">
            <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
                {/* ContactFrom */}
                <div data-aos="fade-left" data-aos-anchor-placment="top-center">
                    <ContactFrom />
                </div>
                {/* ContactInfo */}
                <div data-aos="fade-right" data-aos-anchor-placment="top-center" data-aos-delay="100" className="xl:mx-auto">
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
};

export default Contact;