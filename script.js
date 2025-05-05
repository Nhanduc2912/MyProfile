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

function alertLoginOK() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function alertLoginCancal() {
  const cancal = document.getElementById("cancal");
  cancal.classList.add("show2");

  setTimeout(() => {
    cancal.classList.remove("show2");
  }, 3000);
}
function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  let vaidiuser = "1";
  let vaidipassword = "1";

  if (password === vaidipassword && username === vaidiuser) {
    alertLoginOK(); // ✅ Thông báo thành công
    setTimeout(() => {
      location = "main.html";
    }, 2000);
  } else {
    alertLoginCancal(); // ❌ Thông báo thất bại
  }
}
