import React from "react";

interface navbarProps{
    aboutRef ?: React.RefObject<HTMLElement>;
    projectRef ?: React.RefObject<HTMLElement>;
    contactRef ?: React.RefObject<HTMLElement>;
}
export function Navbar({aboutRef, projectRef, contactRef}: navbarProps){

    const scrollToSection = (ref ?: React.RefObject<HTMLElement>) => {
        ref?.current?.scrollIntoView({behavior: 'smooth'});
    }


    return <header className="sticky z-40 top-0 w-full h-[70px] border border-b border-gray-300 shadow">
        <div className="flex p-4 items-center justify-between sm:gap-x-0 ">
            <a href="/client/public"><div className="text-3xl font-semibold"> Yuvraj Ahuja </div></a>
            <div className="flex items-center justify-around text-lg text-neutral-500 pt-2 pr-6 gap-x-6">
                <button onClick={() => scrollToSection(aboutRef)}>About</button>
                <button onClick={() => scrollToSection(projectRef)}>Projects</button>
                <button onClick={() => scrollToSection(contactRef)}>Contact</button>
            </div>
        </div>
    </header>
}