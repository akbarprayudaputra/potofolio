import { Menu } from "lucide-react";
import { useState } from "react";
import "aos/dist/aos.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="w-full flex items-center justify-between p-4 bg-amber-50">
                <h1 className="font-semibold">Portofolio</h1>
                <Menu strokeWidth={3} onClick={() => setIsOpen(!isOpen)} />
            </nav>
            {isOpen && (
                <div
                    data-aos="fade-left"
                    className="max-w-full absolute z-50 left-0 right-0"
                >
                    <DropDown />
                </div>
            )}
        </>
    );
};

export const DropDown = () => {
    return (
        <div className="bg-amber-50">
            <ul>
                <li className="py-2 px-1">TEst</li>
                <li className="py-2 px-1">TEst</li>
                <li className="py-2 px-1">TEst</li>
            </ul>
        </div>
    );
};

export default Navbar;
