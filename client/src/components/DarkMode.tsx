import {Button} from "@/components/ui/button.tsx";
import {Sun, Moon} from "lucide-react";
import {useState} from "react";



export function DarkButton(){

const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
}

const [theme, setTheme] = useState('light');

    return(
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-neutral-500">
            {theme === 'dark' ? <Sun className="h-[1.4rem] w-[1.4rem]" /> : <Moon className="h-[1.5rem] w-[1.5rem]" />}
            <span className="sr-only">Toggle theme</span>
        </Button>

    )
}