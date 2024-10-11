import React from "react";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Mail} from "lucide-react";
import {Github} from "lucide-react";
import {Linkedin} from "lucide-react";

interface projectSectionProp{
    sectionRef: React.RefObject<HTMLElement>;
}

export function ContactSection({sectionRef} : projectSectionProp) {
    return <div className="w-full bg-gray-100 dark:bg-gray-800">
    <section ref={sectionRef} id="contact" className="py-12 md:py-24 lg:py-32 ">
        <div className=" px-4 md:px-6 w-full">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Me</h2>
            <div className="mx-auto max-w-[500px]">
                <form className="space-y-4">
                    <Input placeholder="Your Name"/>
                    <Input type="email" placeholder="Your Email"/>
                    <Textarea placeholder="Your Message"/>
                    <Button className="w-full">Send Message</Button>
                </form>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
                <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4"/>
                </Button>
                <Button variant="outline" size="icon">
                    <Github className="h-4 w-4"/>
                </Button>
                <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4"/>
                </Button>
            </div>
        </div>
    </section>
    <footer ref={sectionRef}>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © 2024 Yuvraj Ahuja. All rights reserved.
            </p>
            <nav className="flex items-center space-x-8 pr-3">
                <a href="#" className="text-sm font-medium text-muted-foreground hover:underline">
                    Privacy Policy
                </a>
            </nav>
        </div>
    </footer>
    </div>
}