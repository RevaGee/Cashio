import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import './styles.scss';

const ParticlesComponent = () => {
    const [options, setOptions] = useState({});

    useEffect(() => {
        const initializeParticles = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            setOptions({
                background: {
                    color: { value: "inherit" },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                        onClick: { enable: true, mode: "push" },
                        resize: { enable: true },
                    },
                    modes: {
                        push: { distance: 200, duration: 15 },
                        grab: { distance: 150 },
                    },
                },
                particles: {
                    color: { value: "#616161" },
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
                        outModes: { default: "bounce" },
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: { density: { enable: true }, value: 120 },
                    opacity: { value: 1 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
            });
        };
        initializeParticles();
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return <Particles id="particles" init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
