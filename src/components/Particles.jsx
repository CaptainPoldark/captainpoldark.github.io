import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 3200,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.3,
          },
          move: {
            direction: "none",
            speed: .6,
            enable: true,
          },
          size: {
            value: 3,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "push",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
          },
          modes: {
            push: {
              particles_nb: 3,
            },
            attract: {
              distance: 200,
              duration: 0.7,
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 30,
              speed: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
