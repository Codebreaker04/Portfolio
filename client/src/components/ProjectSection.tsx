import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Github} from "lucide-react";

interface ProjectSectionProps {
    sectionRef: React.RefObject<HTMLElement>;
}

export function ProjectSection({sectionRef} : ProjectSectionProps){
    return <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32">
    <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">Pay Pro</CardTitle>
                    <CardDescription className="text-md">A Wallet Payments Apps</CardDescription>
                </CardHeader>
                <CardContent>
                    <img alt="Project One"
                         className="w-full h-[200px] object-cover"
                         height="200"
                        src="/paypro.png"
                         style={{
                             aspectRatio: "300/200",
                             objectFit: "cover",
                         }}
                         width="300"/>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                        <a href="https://pay-pro-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">
                        View Project
                        </a>
                    </Button>
                    <Button variant="outline" asChild>
                        <a href="https://github.com/Codebreaker04/PayPro" target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4"/>
                        </a>
                    </Button>
                </CardFooter>
            </Card>
            {/*<Card>*/}
            {/*    <CardHeader>*/}
            {/*        <CardTitle className="text-3xl">Pay Pro</CardTitle>*/}
            {/*        <CardDescription className="text-md">A Wallet Payments Apps</CardDescription>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*        <img alt="Project One"*/}
            {/*             className="w-full h-[200px] object-cover"*/}
            {/*             height="200"*/}
            {/*             // src=""*/}
            {/*             style={{*/}
            {/*                 aspectRatio: "300/200",*/}
            {/*                 objectFit: "cover",*/}
            {/*             }}*/}
            {/*             width="300"/>*/}
            {/*    </CardContent>*/}
            {/*    <CardFooter className="flex justify-between">*/}
            {/*        <Button variant="outline">View Project</Button>*/}
            {/*        <Button variant="outline">*/}
            {/*            <Github className="h-4 w-4"/>*/}
            {/*        </Button>*/}
            {/*    </CardFooter>*/}
            {/*</Card>*/}
            {/*<Card>*/}
            {/*    <CardHeader>*/}
            {/*        <CardTitle className="text-3xl">Pay Pro</CardTitle>*/}
            {/*        <CardDescription className="text-md">A Wallet Payments Apps</CardDescription>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*        <img alt="Project One"*/}
            {/*             className="w-full h-[200px] object-cover"*/}
            {/*             height="200"*/}
            {/*            // src=""*/}
            {/*             style={{*/}
            {/*                 aspectRatio: "300/200",*/}
            {/*                 objectFit: "cover",*/}
            {/*             }}*/}
            {/*             width="300"/>*/}
            {/*    </CardContent>*/}
            {/*    <CardFooter className="flex justify-between">*/}
            {/*        <Button variant="outline">View Project</Button>*/}
            {/*        <Button variant="outline">*/}
            {/*            <Github className="h-4 w-4"/>*/}
            {/*        </Button>*/}
            {/*    </CardFooter>*/}
            {/*</Card>*/}
        </div>
    </div>
    </section>
}