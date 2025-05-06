const Hero = () => {
    return (
        <div data-aos="fade-right">
            <div className="flex flex-col items-center justify-center gap-8 h-[500px]">
                <img
                    src="./profile.jpg"
                    alt=""
                    className="w-52 h-5w-52 rounded-full"
                />
                <div>
                    <h1 className="text-2xl font-bold">Akbar Prayuda Putra</h1>
                    <p className="text-sm text-center">Fullstack Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
