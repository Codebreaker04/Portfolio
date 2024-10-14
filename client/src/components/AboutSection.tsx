import React from "react";
import {Button} from "@/components/ui/button.tsx";

interface ProjectSectionProps {
    sectionRef ?: React.RefObject<HTMLElement>;
    projectRef ?: React.RefObject<HTMLElement>;
    contactRef ?: React.RefObject<HTMLElement>;
}

export function AboutSection({sectionRef, projectRef, contactRef}: ProjectSectionProps) {

    const scrollToSection = (ref ?: React.RefObject<HTMLElement>)=>{
        ref?.current?.scrollIntoView({behavior: "smooth"});
    }

    return <section ref={sectionRef} className="dark:bg-neutral-900">
        <div className="flex justify-center items-center py-12 md:py-24 lg:py-32 xl:py-56 ">
            <div className="flex flex-col gap-y-3">
            <div className="font-bold text-5xl w-full sm:text-4xl md:text-5xl lg:text-6xl/none">Yuvraj Ahuja</div>
            <div className="text-neutral-500 md:text-xl dark:text-gray-400 text-center">Full Stack Web Developer</div>
                <div className="flex justify-evenly">
                    <Button variant="outline" className="bg-black text-white" onClick={() => scrollToSection(projectRef)}>View Projects</Button>
                    <Button variant="outline" className="bg-black text-white" onClick={() => scrollToSection(contactRef)}>Contact Me</Button>
                </div>
            </div>
        </div>
    </section>
}