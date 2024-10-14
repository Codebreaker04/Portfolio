import React from "react";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Twitter} from "lucide-react";
import {Github} from "lucide-react";
import {Linkedin} from "lucide-react";

interface projectSectionProp{
    sectionRef: React.RefObject<HTMLElement>;
}

export function ContactSection({sectionRef} : projectSectionProp) {
    return <div className="w-full bg-gray-100 dark:bg-neutral-900">
    <section ref={sectionRef} id="contact" className="py-12 md:py-24 lg:py-32 ">
        <div className=" px-4 md:px-6 w-full">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Me</h2>
            <div className="mx-auto max-w-[500px]">
                <form className="space-y-4">
                    <Input className="bg-neutral-200 dark:bg-neutral-700" placeholder="Your Name"/>
                    <Input className="bg-neutral-200 dark:bg-neutral-700" type="email" placeholder="Your Email"/>
                    <Textarea className="bg-neutral-200 dark:bg-neutral-700" placeholder="Your Message"/>
                    <Button variant="outline" className="w-full bg-black text-white">Send Message</Button>
                </form>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="bg-black text-white">
                    <a href="https://x.com/ahuja_1yuvraj" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4"/>
                    </a>
                </Button>
                <Button variant="outline" size="icon" className="bg-black text-white">
                    <a href="https://github.com/Codebreaker04/" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4"/>
                    </a>
                </Button>
                <Button variant="outline" size="icon" className="bg-black text-white">
                    <a href="https://www.linkedin.com/in/yuvraj-ahuja-568ba3225/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4"/>
                    </a>
                </Button>
            </div>
        </div>
    </section>
        <footer ref={sectionRef}>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © 2024 Yuvraj Ahuja. All rights reserved.
            </p>
        </div>
    </footer>
    </div>
}