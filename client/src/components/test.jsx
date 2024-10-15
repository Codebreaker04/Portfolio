<div className="flex items-center space-x-6 pr-6">
    {/* Dark Mode Toggle */}
    <DarkButton />

    {/* Navbar links */}
    <ul className="hidden lg:flex space-x-4">
        <li>
            <Button variant="ghost" className="text-lg text-neutral-500" onClick={() => scrollToSection(aboutRef)}>
                About
            </Button>
        </li>
        <li>
            <Button variant="ghost" className="text-lg text-neutral-500" onClick={() => scrollToSection(projectRef)}>
                Projects
            </Button>
        </li>
        <li>
            <Button variant="ghost" className="text-lg text-neutral-500" onClick={() => scrollToSection(contactRef)}>
                Contact
            </Button>
        </li>
    </ul>

    {/* Mobile Menu Icon */}
    <div className="lg:hidden">
        <Menu className="h-6 w-6 text-neutral-500" />
    </div>
</div>
</div>
</header>
);
}