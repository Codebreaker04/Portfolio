import React from "react";

interface ProjectSectionProps {
    sectionRef ?: React.RefObject<HTMLElement>;
    projectRef ?: React.RefObject<HTMLElement>;
    contactRef ?: React.RefObject<HTMLElement>;
}

export function AboutSection({sectionRef, projectRef, contactRef}: ProjectSectionProps) {

    const scrollToSection = (ref ?: React.RefObject<HTMLElement>)=>{
        ref?.current?.scrollIntoView({behavior: "smooth"});
    }

    return <section ref={sectionRef}>
        <div className="flex justify-center items-center w-full h-[700px]">
            <div className="flex flex-col gap-y-3">
            <div className="font-bold text-5xl w-full ">Yuvraj Ahuja</div>
            <div className="text-neutral-500 text-xl text-center">Full Stack Web Developer</div>
                <div className="flex justify-evenly">
                    <button className=" bg-black text-white p-1 px-2 border border-neutral-400 rounded-md" onClick={() => scrollToSection(projectRef)}>View Projects</button>
                    <button className=" bg-black text-white p-1 px-2 border border-neutral-400 rounded-md" onClick={() => scrollToSection(contactRef)}>Contact Me</button>
                </div>
            </div>
        </div>
    </section>
}