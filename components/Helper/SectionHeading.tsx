import React, { ReactNode } from "react";

// define prope type
type Prope = {
    children:ReactNode
}

const SectionHeading = ({children}:Prope) => {
    return (
        <h1 className="bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm-text-3xl md-text-4xl uppercase -rotate-6">{children}</h1>
    );
};

export default SectionHeading