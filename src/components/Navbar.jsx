import { Menu } from "lucide-react";
import { useState } from "react";
import "aos/dist/aos.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full flex items-center justify-between p-4 bg-amber-50 z-10">
            <h1 className="font-semibold">Portofolio</h1>
            <Menu strokeWidth={3} onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <div className="py-4 bg-amber-50 absolute z-20 right-0 left-0 top-full border-t">
                    <h1 className="text-lg font-semibold px-4 pb-2">Menu: </h1>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a
                                className="px-4 font-normal underline underline-offset-2"
                                href="#skill"
                            >
                                Skill
                            </a>
                        </li>
                        <li>
                            <a
                                className="px-4 font-normal underline underline-offset-2"
                                href="#about"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className="px-4 font-normal underline underline-offset-2"
                                href="#project"
                            >
                                Project
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
