"use client";

import React from "react";

export interface IBox {
    height?: string;
    width?: string;
    children: React.ReactNode;
    boxClass?: string;
}

const Box = ({ children, height, boxClass, width }: IBox) => {
    return (
        <div
            className={`border-b border-line w-full border-(--grid-color) ${
                boxClass ?? ""
            }`}
            style={width ? { maxWidth: width } : {}}
        >
            <div
                className={`${height} border-x border-line border-(--grid-color) mx-1`}
            >
                {children}
            </div>
        </div>
    );
};

export { Box as default, Box };
