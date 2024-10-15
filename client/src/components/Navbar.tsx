import React, {useState} from "react";
import {Menu} from "lucide-react"
import {Button} from "@/components/ui/button.tsx";
import {DarkButton} from "@/components/DarkMode.tsx";

interface navbarProps{
    aboutRef ?: React.RefObject<HTMLElement>;
    projectRef ?: React.RefObject<HTMLElement>;
    contactRef ?: React.RefObject<HTMLElement>;
}
export function Navbar({aboutRef, projectRef, contactRef}: navbarProps){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const scrollToSection = (ref ?: React.RefObject<HTMLElement>) => {
        ref?.current?.scrollIntoView({behavior: 'smooth'});
    }


    return <header className="sticky top-0 w-full h-[70px] bg-white dark:bg-neutral-900 border border-b-gray-300 dark:border-b-neutral-600 shadow">
        <div className="flex z-40 pl-4 pt-4 items-center justify-between">
            <a href="/" className="text-3xl font-semibold">
                Yuvraj Ahuja
            </a>
            <div className="flex items-center lg:pr-6 ">
                <DarkButton/>
                <ul className={`hidden lg:flex `}>
                    <li>
                <Button variant="ghost" className="text-lg text-neutral-500" onClick={() => scrollToSection(aboutRef)}>About</Button>
                    </li>
                    <li>
                <Button variant="ghost" className="text-lg text-neutral-500" onClick={() => scrollToSection(projectRef)}>Projects</Button>
                    </li>
                <li>
                <Button variant="ghost" className="text-lg text-neutral-500" onClick={() => scrollToSection(contactRef)}>Contact</Button>
                </li>
                </ul>

                <div className="lg:hidden">
                    <Button variant="ghost" onClick={toggleMenu}>
                        <Menu className="h-6 w-6 text-neutral-500"/>
                    </Button>
                </div>
            </div>
        </div>
        {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-900 shadow-md rounded-md z-50">
                <ul className="flex flex-col space-y-2 p-2">
                    <li>
                        <Button
                            variant="ghost"
                            className="text-lg text-neutral-500"
                            onClick={() => scrollToSection(aboutRef)}
                        >
                            About
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant="ghost"
                            className="text-lg text-neutral-500"
                            onClick={() => scrollToSection(projectRef)}
                        >
                            Projects
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant="ghost"
                            className="text-lg text-neutral-500"
                            onClick={() => scrollToSection(contactRef)}
                        >
                            Contact
                        </Button>
                    </li>
                </ul>
            </div>
        )}
    </header>
}