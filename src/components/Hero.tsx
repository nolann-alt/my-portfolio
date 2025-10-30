
function Hero () {
    return (
        <section id="hero" className="relative w-full h-screen overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-6xl md:text-8xl font-bold text-[#C77DFF] drop-shadow-[0_0_15px_#C77DFF]">
                    LESCOP Nolann
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-[#EDEDED]">
                    Étudiant en BUT Informatique
                </p>
            </div>
        </section>
    );
}

export default Hero;