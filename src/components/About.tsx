import Title from "./Title.tsx";
import profil from "../assets/profil.jpg";

function About () {
    return (
      <section id="about" className="relative">
          <div className="bg-black/30 p-10 mb-10 md:mb-32">
              <Title title="About Me"/>
              <div className="md:h-screen flex justify-center">
                    <div className="hidden md:block">
                        <img src={profil} alt="profil"
                             className="w-96 object-cover rounded-xl"/>
                    </div>
                    <div>

                    </div>
              </div>
          </div>
      </section>
    );
}

export default About;