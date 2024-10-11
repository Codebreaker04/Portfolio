import React from "react";

interface ProjectSectionProps {
    sectionRef: React.RefObject<HTMLElement>;
}

export function ProjectSection({sectionRef} : ProjectSectionProps){
    return <section ref={sectionRef} className="w-full">
    <div className="flex flex-col">
        <div className="w-full">Projects</div>
        <div className="grid gap-6 sm:grid-cols-2  lg:grid-cols-3">

        </div>
    </div>
    </section>
}