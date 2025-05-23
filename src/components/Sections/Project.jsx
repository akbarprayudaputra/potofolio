import laravel from "../../assets/laravel.svg";
import php from "../../assets/php.svg";

const Project = () => {
    return (
        <section className="mx-4 mt-10" id="project">
            <h1 className="text-xl font-semibold">Project:</h1>
            <ProjectCard
                img={laravel}
                title={"E-Learning"}
                desc={
                    "Application Web E-Learning build with Laravel based on API. This application is made to support learning process."
                }
                target={"https://github.com/akbarprayudaputra/potofolio"}
            />
            <ProjectCard
                target={"https://github.com/akbarprayudaputra/mini-ecommers"}
                img={php}
                title={"Mini E-Commers"}
                desc={"Application Web E-Commers build with PHP based on API."}
            />
        </section>
    );
};

export const ProjectCard = ({ title, desc, img, target }) => {
    return (
        <div className="my-8 px-4 py-2 border rounded-2xl" data-aos="fade-left">
            <img src={img} alt={title} className="w-full" />
            <div>
                <a
                    href={target}
                    className="hover:underline underline-offset-[7px] hover:text-blue-600 hover:cursor-pointer text-blue-800"
                >
                    <h1 className="text-lg font-semibold my-2">{title}</h1>
                </a>
                <hr className="my-2" />
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Project;
