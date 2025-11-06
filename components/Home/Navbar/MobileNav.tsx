import React from "react"
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";

// Props type
type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
    const navopen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';


    return (
        <div>
            {/* Overlay */}
            <div className={`fixed ${navopen} transform transition-all duration-500 delay-150 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
            {/* Nav links */}
            <div className={`text-white ${navopen} transform transition-all duration-500 delay-150 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715]  space-y-6 z-[10000] opacity-80 backdrop-blur-sm`}>

                        {navLinks.map((navlink) => {
                        return (
                            <Link key={navlink.id} href={navlink.url}>
                                <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">{navlink.label}</p>
                            </Link>
                        );
                        })}
                {/* Close Button */}
                <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-w" />
            </div>
        </div>
    );
};

export default MobileNav;