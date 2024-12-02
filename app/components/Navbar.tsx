'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="flex sticky top-0 left-0 flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white drop-shadow-xl">
            <nav className="relative max-w-[90rem] w-full navbar:flex md:items-center md:justify-between md:gap-3 mx-auto px-4  py-[21px]">
                {/* logo with menu button */}
                <div className="flex items-center justify-between">
                    <a
                        className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
                        href="./"
                        aria-label="Brand"
                    >
                        Joeseph & Susan Pisacano Memorial Foundation
                    </a>

                    {/* menu button */}
                    <div className="navbar:hidden">
                        <button
                            type="button"
                            className="relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-black/50 text-black hover:bg-black/10 focus:outline-none focus:bg-black/10 disabled:opacity-50 disabled:pointer-events-none"
                            aria-expanded={isNavOpen}
                            aria-controls="hs-base-header"
                            aria-label="Toggle navigation"
                            onClick={toggleNav}
                        >
                            {/* hamburger button */}
                            <svg
                                className={`${
                                    isNavOpen ? 'hidden' : 'block'
                                } size-4`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <title>d</title>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                            {/* close menu button */}
                            <svg
                                className={`${
                                    isNavOpen ? 'block' : 'hidden'
                                } size-4`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <title>d</title>
                                <path d="M18 6 6 18" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* end menu button */}
                </div>
                {/* end logo with menu button */}

                {/* menu */}
                <div
                    id="hs-base-header"
                    className={`hs-collapse ${isNavOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow navbar:block`}
                    aria-labelledby="hs-base-header-collapse"
                >
                    <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div className="pt-6 navbar:py-0 flex flex-col navbar:flex-row navbar:items-center navbar:justify-end gap-0.5 navbar:gap-1">
                            <a
                                className="p-2 flex items-center text-black focus:outline-none focus:text-black"
                                href="./"
                                aria-current="page"
                            >The Mission</a>

                            <a
                                className="p-2 flex items-center text-black/80 hover:text-black focus:outline-none focus:text-black"
                                href="./"
                            >About Us</a>

                            {/* <a
								className="p-2 flex items-center text-black/80 hover:text-black focus:outline-none focus:text-black"
								href="./"
							>
								Our Impact
							</a> */}

                            <a
                                className="p-2 flex items-center text-black/80 hover:text-black focus:outline-none focus:text-black"
                                href="./"
                            >Contact Us</a>

                            {/* button group */}
                            <div className="relative flex flex-wrap items-center gap-x-1.5 navbar:ps-2.5 mt-1 navbar:mt-0 navbar:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-white/30 before:-translate-y-1/2">
                                <a
                                    className="px-7 py-3 bg-[#ff2121] rounded-full w-full flex items-center text-white font-bold"
                                    href="./"
                                >Donate</a>
                            </div>
                            {/* end button group */}
                        </div>
                    </div>
                </div>
                {/* end menu */}
            </nav>
        </header>
    );
};

export default Navbar;
