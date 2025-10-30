const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 w-full bg-[#0E012]/80 backdrop-blur-lg z-50 p-4 flex justify-center gap-8 text-white">
            <a href="#hero" className="hover:text-[#C77DFF] transition">Accueil</a>
            <a href="#about" className="hover:text-[#C77DFF] transition">Projets</a>
            <a href="#projects" className="hover:text-[#C77DFF] transition">À propos</a>
            <a href="#contact" className="hover:text-[#C77DFF] transition">Contact</a>
        </nav>
    );
}

export default Navbar;