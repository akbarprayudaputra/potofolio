import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-amber-50 p-4 text-center">
            <div>
                <h1 className="text-2xl font-semibold">Let's Connect</h1>
                <div className="flex items-center justify-center gap-4 my-4">
                    <a
                        href="https://github.com/akbarprayudaputra"
                        target="_blank"
                    >
                        <Github />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/akbar-prayuda-putra/"
                        target="_blank"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="https://www.instagram.com/akbr.yda/"
                        target="_blank"
                    >
                        <Instagram />
                    </a>
                </div>
            </div>
            <p>&copy; 2025 Akbar Prayuda Putra</p>
        </div>
    );
};

export default Footer;
