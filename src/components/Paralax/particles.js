import Particles, {initParticlesEngine} from "@tsparticles/react";
import {useEffect, useState} from "react";
import {loadSlim} from "@tsparticles/slim";
import './styles.scss';

const ParticlesComponent = () => {
        const [init, setInit] = useState(false);
        const [options, setOptions] = useState({});

        useEffect(() => {
            const initializeParticles =  () => {
                 initParticlesEngine( (engine) => {
                     loadSlim(engine);
                });
                setInit(true);
            };
            initializeParticles();
        }, []);

        useEffect(() => {
            setOptions({
                background: {
                    color: {
                        value: "inherit",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    "events": {
                        "onHover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onClick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": {
                            "enable": true,
                        }
                    },
                    modes: {
                        push: {
                            distance: 200,
                            duration: 15,
                        },
                        grab: {
                            distance: 150,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#616161",
                    },
                    links: {
                        color: "#616161",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 120,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {min: 1, max: 3},
                    },
                },
                detectRetina: true,
            });
        }, []);

        const particlesLoaded = (container) => {
            console.log(container);
        };

        return <Particles className='particles' options={options} style={{zIndex: -5}} />;
};
export default ParticlesComponent;


