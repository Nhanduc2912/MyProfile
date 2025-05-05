document.addEventListener("DOMContentLoaded", function () {
  const isMobile =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // Nếu là Mobile thì chặn lại và hiện thông báo
    document.body.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;">
                <h1>Thiết bị không được hỗ trợ</h1>
                <p>Vui lòng truy cập website bằng máy tính (Laptop hoặc PC).</p>
            </div>
        `;
  }
});

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

const toggleButton = document.getElementById("toggleSidebar");
const sidebar = document.querySelector(".sb-sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
