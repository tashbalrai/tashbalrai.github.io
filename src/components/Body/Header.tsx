"use client";

import Flex from "./Flex";
import Box from "./Box";
import Logo from "../SVG/Logo";
import { useBoxAttributes } from "../../utils/hooks/UseBoxAttributes";
import { useCallback, useLayoutEffect, useRef } from "react";
import { LOCAL_STORAGE_THEME_VAR_NAME } from "../../utils/constants";
import { ThemeNames } from "../../utils/types";

export default function Header() {
    const { width, boxes } = useBoxAttributes();
    const switchThemeRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        let selectedTheme = document
            .getElementsByTagName("html")[0]
            .getAttribute("data-theme");

        if (window.localStorage) {
            const storedTheme = window.localStorage.getItem(
                LOCAL_STORAGE_THEME_VAR_NAME
            );

            if (storedTheme && storedTheme !== selectedTheme) {
                selectedTheme = storedTheme;
            }
        }

        if (selectedTheme === ThemeNames.DARK) {
            if (switchThemeRef.current) {
                switchThemeRef.current.checked = true;
            }
        }
    }, []);

    const handleThemeChange = useCallback(() => {
        if (switchThemeRef.current) {
            if (switchThemeRef.current.checked) {
                document.documentElement.setAttribute(
                    "data-theme",
                    ThemeNames.DARK
                );
                window.localStorage.setItem(
                    LOCAL_STORAGE_THEME_VAR_NAME,
                    ThemeNames.DARK
                );
            } else {
                document.documentElement.setAttribute(
                    "data-theme",
                    ThemeNames.WHITE
                );
                window.localStorage.setItem(
                    LOCAL_STORAGE_THEME_VAR_NAME,
                    ThemeNames.WHITE
                );
            }
        }
    }, [switchThemeRef]);

    return (
        <Flex>
            <Box height="h-[71px]" width={`${(width * boxes) / 16}rem`}>
                <div className="h-[71px] px-5 flex flex-row items-center justify-between">
                    <div className="h-[71px] px-5 flex flex-row items-center gap-4">
                        <a href="/">
                            <Logo />
                        </a>
                        <div className="text-3xl uppercase font-bold">
                            <a href="/">Huntize</a>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <p className="text-sm">
                            <a href="#">About Me</a>
                        </p>
                        <label className="group relative flex items-center justify-between p-2 text-xl hover:cursor-pointer">
                            <input
                                ref={switchThemeRef}
                                className="peer absolute left-1/2 h-full w-full -translate-x-1/2 appearance-none rounded-md"
                                type="checkbox"
                                onChange={handleThemeChange}
                            />
                            <span className="ml-4 text-white flex h-10 w-16 flex-shrink-0 items-center rounded-full bg-[url(/public/moon.svg)] bg-right p-1 duration-300 ease-in-out peer-checked:bg-[url(/public/sun.svg)] peer-checked:bg-left bg-no-repeat after:h-8 after:w-8 after:rounded-full after:bg-white after:shadow-md after:duration-300 group-hover:after:translate-x-1 peer-checked:after:translate-x-6"></span>
                        </label>
                    </div>
                </div>
            </Box>
        </Flex>
    );
}
