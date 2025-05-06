import laravel from "../../assets/laravel.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript-js.svg";
import php from "../../assets/php.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind-css.svg";

const Skill = () => {
    const skillBassic = [
        {
            name: "HTML",
            logo: html,
        },
        {
            name: "CSS",
            logo: css,
        },
        {
            name: "Javascript",
            logo: javascript,
        },
        {
            name: "PHP",
            logo: php,
        },
    ];

    const skillFramework = [
        {
            name: "Laravel",
            logo: laravel,
        },
        {
            name: "React JS",
            logo: react,
        },
        {
            name: "Tailwind",
            logo: tailwind,
        },
    ];

    return (
        <div className="mb-4">
            <h2 className="text-lg mx-4">Bassic :</h2>
            <div data-aos="fade-left">
                <div className="flex  gap-2 overflow-y-hidden overflow-x-auto whitespace-nowrap mx-4">
                    {skillBassic.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center border px-8 py-2 gap-2"
                        >
                            <img src={item.logo} alt="" className="w-10 h-10" />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="text-lg mx-4 mt-4">Framework :</h2>
            <div data-aos="fade-left">
                <div className="flex gap-2 overflow-y-hidden overflow-x-auto whitespace-nowrap mx-4">
                    {skillFramework.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center border px-8 py-2 gap-2"
                        >
                            <img src={item.logo} alt="" className="w-10 h-10" />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
