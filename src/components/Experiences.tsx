import Title from "./Title.tsx";
import imgHTML from "../assets/techno/html.svg";
import imgCSS from "../assets/techno/css.svg";
import imgJS from "../assets/techno/js.svg";
import imgTS from "../assets/techno/ts.svg";
import imgREACT from "../assets/techno/react.svg";
import imgVUE from "../assets/techno/vue.svg";
import imgEXPRESS from "../assets/techno/express.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgWORDPRESS from "../assets/techno/wordpress.png";
import imgPYTHON from "../assets/techno/python.svg";
import imgJAVA from "../assets/techno/java.svg";
import imgSQL from "../assets/techno/sql.svg";
import imgPHP from "../assets/techno/php.svg";
import imgC from "../assets/techno/c.svg";
import imgMYSQL from "../assets/techno/mysql.svg";
import imgORACLE from "../assets/techno/oracle.svg";
import imgBOOTSTRAP from "../assets/techno/bootstrap.svg";
import imgGSAP from "../assets/techno/gsap.png";
import imgLINUX from "../assets/techno/linux.svg";
import imgUBUNTU from "../assets/techno/ubuntu.png";
import imgWINDOWS from "../assets/techno/windows.svg";
import imgENDEAVOUROS from "../assets/techno/endeavouros.png";
import imgDEBIAN from "../assets/techno/debian.svg";
import imgGITHUB from "../assets/techno/github.svg";
import imgGIT from "../assets/techno/git.svg";
import imgVSCODE from "../assets/techno/vscode.svg";
import imgINTELIJ from "../assets/techno/intelij.svg";
import imgDATAGRIP from "../assets/techno/datagrip.svg";
import imgPYCHARM from "../assets/techno/pycharm.svg";
import imgWEBSTORM from "../assets/techno/webstorm.svg";
import imgECLIPSE from "../assets/techno/eclipse.svg";
import imgCOLLEGE from "../assets/experiences/college.jpg";
import imgAMBULYMPICS from "../assets/experiences/ambulympics.png";
import imgLACIOTAT from "../assets/experiences/laciotat.png";
import imgWESTROBOTIC from "../assets/experiences/westrobotic.png";
import imgETSGABILLET from "../assets/experiences/ets-gabillet.png";

const skills = [
    {id : 1, name: "HTML", image: imgHTML},
    {id : 2, name: "CSS", image: imgCSS},
    {id : 3, name: "JavaScript", image: imgJS},
    {id : 4, name: "Typescript", image: imgTS},
    {id : 5, name: "React", image: imgREACT},
    {id : 6, name: "Vue.js", image: imgVUE},
    {id : 7, name: "Express.js", image: imgEXPRESS},
    {id : 8, name: "Tailwind CSS", image: imgTAILWIND},
    {id : 9, name: "Bootstrap", image: imgBOOTSTRAP},
    {id : 10, name: "GSAP", image: imgGSAP},
    {id : 11, name: "WordPress", image: imgWORDPRESS},
    {id : 12, name: "Python", image: imgPYTHON},
    {id : 13, name: "Java", image: imgJAVA},
    {id : 14, name: "SQL", image: imgSQL},
    {id : 15, name: "PHP", image: imgPHP},
    {id : 16, name: "C", image: imgC},
    {id : 17, name: "MySQL", image: imgMYSQL},
    {id : 18, name: "Oracle", image: imgORACLE},
    {id : 19, name: "Linux", image: imgLINUX},
    {id : 20, name: "Ubuntu", image: imgUBUNTU},
    {id : 21, name: "Windows", image: imgWINDOWS},
    {id : 22, name: "EndeavourOS", image: imgENDEAVOUROS},
    {id : 23, name: "Debian", image: imgDEBIAN},
    {id : 24, name: "Github", image: imgGITHUB},
    {id : 25, name: "Git", image: imgGIT},
    {id : 26, name: "VsCode", image: imgVSCODE},
    {id : 27, name: "Intelij IDEA", image: imgINTELIJ},
    {id : 28, name: "DataGrip", image: imgDATAGRIP},
    {id : 29, name: "PyCharm", image: imgPYCHARM},
    {id : 30, name: "WebStorm", image: imgWEBSTORM},
    {id : 31, name: "Eclipse", image: imgECLIPSE},
];

const experiences = [
    {
        id: 1,
        type: "University",
        role: "Fullstack Developer",
        company: "Collège Notre Dame La Blanche, Theix",
        period: "Sept 2025 - Aprl 2026",
        description: [
            "Developing a biathlon training assistance application for the college",
            "Frontend built with Kotlin + Jetpack Compose",
            "Backend using Ktor (HTTP + SSE) for real-time data",
            "SQLite database to manage training data and performance metrics",
            "Collaborating with teachers and students to gather requirements and design features"
        ],
        image: imgCOLLEGE,
    },
    {
        id: 2,
        type: "University",
        role: "Project Manager",
        company: "IUT of Vannes",
        period: "Jan 2025 - Jun 2025",
        description: [
            "SAE S2.01 / S2.02 / S2.03",
            "Collaborated with my teammates to create a functional prototype application",
            "Implemented core features using Java",
            "Designed the application to assign first responders efficiently for different missions"
        ],
        image: imgAMBULYMPICS,
    },
    {
        id: 3,
        type: "University",
        role: "Developper",
        company: "IUT of Vannes",
        period: "Nov 2024 - Jan 2025",
        description: [
            "SAE S1.05 / 1.06",
            "Created a WordPress website (La Ciotat) for a small city (population between 20,000 and 50,000) as part of a university project",
            "Customized the website design to be user-friendly and visually appealing",
            "Implemented pages, menus, shop, and content management features to simulate a real municipal website"
        ],
        image: imgLACIOTAT,
    },
    {
        id: 4,
        type: "Internship",
        role: "Intern",
        company: "West Robotic",
        period: "2022",
        description: [
            "Gained hands-on experience programming industrial automata",
            "Learned the time and planning required for automation programming",
            "Discovered how to work in a professional development environment"
        ],
        image: imgWESTROBOTIC,
    },
    {
        id: 5,
        type: "Internship",
        role: "Intern",
        company: "ETS Gabillet",
        period: "2021",
        description: [
            "Gained insight into warehouse operations and stock management",
            "Learned about the day-to-day role of a warehouse operator",
            "Used IT tools for equipment diagnostics and maintenance"
        ],
        image: imgETSGABILLET,
    }
];

const Experiences: React.FC = () => {
    return (
        <section id="experiences" className="relative">
            <Title title="Experiences"/>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-[#C77DFF]">
                                <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full"/>
                            </div>
                            <span className="mt-2 text-sm">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="flex flex-col shadow-lg border-[#C77DFF] rounded-xl border-1 p-4">
                            <div className="flex items-center">
                                <img src={experience.image} alt={experience.company} className="object-cover h-10 w-10"/>
                                <div className='ml-4'>
                                    <h1 className="text-xl text-[#C77DFF] font-bold">
                                        {experience.type}
                                    </h1>
                                    <h1 className="text-xl font-bold">
                                        {experience.role}, {experience.company}
                                    </h1>
                                    <span className="text-small">{experience.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {experience.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Experiences;