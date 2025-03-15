"use client";

import { useLayoutEffect, useState } from "react";
import { BOX_COUNT_PER_ROW, BOX_STD_WIDTH } from "../constants";

const useBoxAttributes = (): { width: number; boxes: number } => {
    const [attr, setAttr] = useState({
        width: BOX_STD_WIDTH,
        boxes: BOX_COUNT_PER_ROW,
    });

    useLayoutEffect(() => {
        const handleResizeEvent = () => {
            if (window.handleScreenResize) {
                window.handleScreenResize();
                setAttr({
                    width: window.config.boxWidth,
                    boxes: window.config.boxes,
                });
            }
        };
        handleResizeEvent(); // Initial call when the component is mounted
        window.addEventListener("resize", handleResizeEvent);
        return () => {
            window.removeEventListener("resize", handleResizeEvent);
        };
    }, []);

    return attr;
};

export { useBoxAttributes };
