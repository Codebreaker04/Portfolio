import React from "react";

interface projectSectionProp{
    sectionRef: React.RefObject<HTMLElement>;
}

export function ContactSection({sectionRef} : projectSectionProp) {
    return <section ref={sectionRef}>
        <div className="flex flex-col">
            <div className="w-full">Contact Me</div>
        </div>
    </section>
}