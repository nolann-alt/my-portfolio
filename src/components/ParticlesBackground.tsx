// --- Importations ---
// useEffect (pour exécuter du code au montage) et useState (pour gérer un état)
import { useEffect, useState } from "react";

// On importe le composant 'Particles' et la fonction 'initParticlesEngine'
// C'est la nouvelle méthode recommandée pour initialiser tsparticles (v3+)
import Particles, { initParticlesEngine } from "@tsparticles/react";

// On importe 'loadSlim'. C'est un "preset" plus léger que 'loadFull'.
// Il contient les fonctionnalités de base (cercles, lignes, etc.)
// mais pèse moins lourd, ce qui est meilleur pour la performance.
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine"; // Import du type (pour TypeScript)

// --- Définition du Composant ---
const ParticlesBackground: React.FC = () => {

    // --- État d'Initialisation ---
    // On crée un état 'init' qui commence à 'false'.
    // Il passera à 'true' seulement quand le moteur de particules sera prêt.
    const [init, setInit] = useState(false);

    // --- Initialisation Asynchrone ---
    // 'useEffect' avec un tableau vide [] ne s'exécute qu'une seule fois,
    // lorsque le composant est "monté" (ajouté à la page).
    useEffect(() => {
        // On lance l'initialisation du moteur
        initParticlesEngine(async (engine: Engine) => {

            // On charge le preset "slim" dans le moteur.
            // C'est une étape asynchrone, on utilise 'await'.
            await loadSlim(engine);

        }).then(() => {
            // Une fois que tout est chargé (la promesse de initParticlesEngine est résolue),
            // on exécute ce bloc '.then()'.

            // On met à jour l'état 'init' à 'true'.
            // Cela va provoquer un nouveau rendu du composant.
            setInit(true);
        });
    }, []); // Le tableau vide garantit que cela ne se produit qu'une fois.

    // --- Rendu Conditionnel ---

    // Si 'init' est encore 'false' (l'initialisation n'est pas finie),
    // on ne retourne rien (null). Le composant est invisible.
    if (!init) {
        return null;
    }

    // Si 'init' est 'true' (l'initialisation est terminée),
    // on retourne le composant <Particles> avec sa configuration.
    return (
        <Particles
            id="tsparticles"
            // Classes Tailwind CSS pour le positionner en fond
            // (position absolue, collé aux 4 coins, en arrière-plan z-index 0)
            className="absolute inset-0 z-0"

            // --- Configuration de l'Animation ---
            options={{
                // Ne pas prendre tout l'écran (on utilise les classes CSS pour ça)
                fullScreen: { enable: false },

                // Fond sombre
                background: {
                    color: "#0E0E12",
                },

                // --- Particules ---
                particles: {
                    // Nombre de particules
                    number: {
                        value: 100,
                        density: {
                            enable: true, // La densité ajuste le nombre à la taille du canvas
                            height: 800,
                            width: 800,
                        },
                    },
                    // Couleur (violet néon)
                    color: {
                        value: "#9B5DE5",
                    },
                    // Forme
                    shape: {
                        type: "circle",
                    },
                    // Opacité
                    opacity: {
                        value: 0.5,
                    },
                    // Taille (aléatoire entre 1 et 3 pixels)
                    size: {
                        value: { min: 1, max: 3 },
                    },
                    // Mouvement
                    move: {
                        enable: true,
                        speed: 2, // Vitesse lente
                    },
                    // Lignes de connexion
                    links: {
                        enable: true,
                        distance: 80, // Distance pour se connecter
                        color: "#C77DFF", // Couleur des lignes
                        opacity: 0.4,
                        width: 1,
                    },
                },

                // --- Interactivité ---
                interactivity: {
                    events: {
                        // Au survol de la souris
                        onHover: {
                            enable: true,
                            mode: "grab", // Mode "saisir"
                        },
                    },
                    modes: {
                        // Configuration du mode "saisir"
                        grab: {
                            distance: 140, // Distance d'effet
                            links: {
                                opacity: 0.7, // Les liens deviennent plus visibles
                            },
                        },
                    },
                },
                // Détection des écrans haute résolution (Retina)
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;