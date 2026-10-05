/* ================= PARTICLES ================= */

const particleContainer = document.getElementById("particles");

const symbols = ["✦", "✧", "•", "⋆"];

for (let i = 0; i < 35; i++) {

  const particle = document.createElement("div");

  particle.className = "particle";

  particle.innerHTML =
    symbols[Math.floor(Math.random() * symbols.length)];

  particle.style.left = Math.random() * 100 + "%";

  particle.style.fontSize =
    (Math.random() * 10 + 6) + "px";

  particle.style.animationDuration =
    (Math.random() * 15 + 12) + "s";

  particle.style.animationDelay =
    -(Math.random() * 20) + "s";

  particleContainer.appendChild(particle);
}


/* ================= OPEN CARD ================= */

const openingScreen =
  document.getElementById("openingScreen");

const mainCard =
  document.getElementById("mainCard");

const openButton =
  document.getElementById("openButton");

const musicButton =
  document.getElementById("musicButton");


openButton.addEventListener("click", () => {

  openButton.innerHTML = "Opening... ✨";

  setTimeout(() => {

    openingScreen.classList.add("hide");

    setTimeout(() => {

      openingScreen.style.display = "none";

      mainCard.classList.remove("hidden");

      musicButton.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

      createConfetti();

    }, 900);

  }, 500);

});


/* ================= CONFETTI ================= */

function createConfetti() {

  const colors = [
    "#c9a45c",
    "#e8d7aa",
    "#91a8b5",
    "#d5a99b",
    "#ffffff"
  ];

  for (let i = 0; i < 120; i++) {

    const confetti =
      document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width =
      Math.random() * 8 + 4 + "px";

    confetti.style.height =
      Math.random() * 12 + 5 + "px";

    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left =
      Math.random() * 100 + "vw";

    confetti.style.top = "-20px";

    confetti.style.zIndex = "999";

    confetti.style.borderRadius = "2px";

    document.body.appendChild(confetti);

    const duration =
      Math.random() * 3 + 3;

    confetti.animate(
      [
        {
          transform:
            `translateY(0) rotate(0deg)`,
          opacity: 1
        },
        {
          transform:
            `translateY(110vh) rotate(${Math.random() * 1000}deg)`,
          opacity: 0
        }
      ],
      {
        duration: duration * 1000,
        easing: "cubic-bezier(.2,.8,.3,1)"
      }
    );

    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}


/* ================= SCROLL REVEAL ================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform =
            "translateY(0)";

        }

      });

    },
    {
      threshold: .12
    }
  );


document
  .querySelectorAll(
    ".message-card, .quality-card, .special-card, .memory-content"
  )
  .forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(40px)";

    element.style.transition =
      "opacity 1s ease, transform 1s ease";

    observer.observe(element);

  });


/* ================= 3D MOUSE EFFECT ================= */

document.addEventListener("mousemove", event => {

  const cake =
    document.querySelector(".cake");

  if (!cake) return;

  const x =
    (event.clientX / window.innerWidth - .5) * 15;

  const y =
    (event.clientY / window.innerHeight - .5) * -10;

  cake.style.transform =
    `rotateX(${8 + y}deg) rotateY(${-12 + x}deg)`;

});


/* ================= MUSIC ================= */

/*
  Browser security ki wajah se automatic music
  play nahi hota. Agar music add karna ho to:

  1. music.mp3 file isi folder mein rakho
  2. neeche Audio wali line uncomment karo
*/

let music = null;
// music = new Audio("music.mp3");
// music.loop = true;

musicButton.addEventListener("click", () => {

  if (!music) {

    alert(
      "Music add karne ke liye folder mein music.mp3 rakho aur script.js mein Audio line uncomment karo."
    );

    return;
  }

  if (music.paused) {

    music.play();

    musicButton.innerHTML = "❚❚";

  } else {

    music.pause();

    musicButton.innerHTML = "♫";

  }

});