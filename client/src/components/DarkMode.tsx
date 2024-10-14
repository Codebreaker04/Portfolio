import {Button} from "@/components/ui/button.tsx";
import {Sun, Moon} from "lucide-react";
import {useEffect, useState} from "react";

export function DarkButton(){
    const [darkTheme, setDarkTheme] = useState<string>(()=>{
        return localStorage.getItem("theme") || "light";
    });

const toggleTheme = () => {
    setDarkTheme(darkTheme === 'light' ? 'dark' : 'light');
}

useEffect(()=>{
    if(darkTheme === "dark"){
        window.document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else{
        window.document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
    console.log(darkTheme);

},[darkTheme])

    return(
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-neutral-500">
                {darkTheme === "light" ? <Sun className="h-[1.4rem] w-[1.4rem]" /> : <Moon className="h-[1.5rem] w-[1.5rem]" />}
                <span className="sr-only">Toggle theme</span>
            </Button>
    )
}