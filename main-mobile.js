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

setInterval(() => {
  const el = document.getElementById("github-rung"); // thay bằng id của phần tử bạn muốn rung
  if (el) {
    el.classList.add("shake-animation");
    // Xóa class sau khi hoàn thành để có thể lặp lại animation
    setTimeout(() => el.classList.remove("shake-animation"), 500);
  }
}, 1000); // mỗi 5 giây
const text =
  "Tao là kẻ thống trị loài bò, hãy tin rằng loài bò biết bay đi hỡi những tín đồ của tao";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();
// Mã nguồn by Ducnguyener
