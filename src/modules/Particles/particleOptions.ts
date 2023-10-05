import type { ISourceOptions } from "tsparticles-engine";
// options.events.onHover.enable = false
// particles.links.enable = false
const home: ISourceOptions = {
  fpsLimit: 120,
  fullScreen: { enable: false, zIndex: -1 },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 50,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#ff4d59", "#ffffff", "#ff4d59", "#ffffff"],
    },
    links: {
      color: "#ff4d59",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

const page: ISourceOptions = {
  fpsLimit: 120,
  fullScreen: { enable: false, zIndex: -1 },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
    },
  },
  particles: {
    color: {
      value: ["#ff4d59", "#ffffff", "#ff4d59", "#ffffff"],
    },
    links: {
      color: "#ff4d59",
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 0.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
};

export const options = {
  home: home,
  page: page,
};
