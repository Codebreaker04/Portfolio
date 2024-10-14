import React from "react";
import {Button} from "@/components/ui/button.tsx";
import {DarkButton} from "@/components/DarkMode.tsx";

interface navbarProps{
    aboutRef ?: React.RefObject<HTMLElement>;
    projectRef ?: React.RefObject<HTMLElement>;
    contactRef ?: React.RefObject<HTMLElement>;
}
export function Navbar({aboutRef, projectRef, contactRef}: navbarProps){

    const scrollToSection = (ref ?: React.RefObject<HTMLElement>) => {
        ref?.current?.scrollIntoView({behavior: 'smooth'});
    }


    return <header className="sticky top-0 w-full h-[70px] bg-white dark:bg-neutral-900 border border-b-gray-300 dark:border-b-neutral-600 shadow">
        <div className="flex z-40 pl-4 pt-4 items-center justify-between sm:gap-x-0 ">
            <a href="/"><div className="text-3xl font-semibold"> Yuvraj Ahuja </div></a>
            <div className="flex items-center justify-around pr-6 ">
                <DarkButton/>
                <Button variant="ghost" className="text-lg text-neutral-500" onClick={() => scrollToSection(aboutRef)}>About</Button>
                <Button variant="ghost" className="text-lg text-neutral-500" onClick={() => scrollToSection(projectRef)}>Projects</Button>
                <Button variant="ghost" className="text-lg text-neutral-500" onClick={() => scrollToSection(contactRef)}>Contact</Button>
            </div>
        </div>
    </header>
}