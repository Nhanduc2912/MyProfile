tsParticles.load("tsparticles", {
  fullScreen: { enable: true },
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: { min: 1, max: 4 },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: "out",
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 100 },
    },
  },
  background: {
    color: "#111111",
  },
});
// Mã nguồn by Ducnguyener
