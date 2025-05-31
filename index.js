// Curved Text
const textPath = document.querySelector("textPath");

let previousScrollY = window.scrollY;
let targetOffset = 0; // This is the value we want to reach
let currentOffset = 0; // This is the actual value used for animation

function animate() {
  // Interpolate currentOffset toward targetOffset (LERP)
  currentOffset += (targetOffset - currentOffset) * 0.1; // 0.1 is the easing factor (lower = smoother)
  textPath.setAttribute("startOffset", `${currentOffset}`);

  requestAnimationFrame(animate);
}

animate(); // Start the animation loop

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const direction = currentScrollY > previousScrollY ? "up" : "down";

  if (direction === "up") {
    targetOffset -= 5; // Increase negative
  } else {
    targetOffset += 5; // Go back
  }

  // Clamp to keep offset within reasonable bounds
  targetOffset = Math.max(-1000, Math.min(targetOffset, 100));

  previousScrollY = currentScrollY;
});

let navbar = document.querySelector("nav");
let target = document.querySelector(".header-bottom-bar");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.classList.remove("text-[#b84b30]");
      } else {
        navbar.classList.add("text-[#b84b30]");
      }
    });
  },
  {
    root: null, // viewport
    threshold: 1, // 50% of target is visible
  }
);

observer.observe(target);

const mobileNav = document.querySelector(".mobile-nav");

const scrollSentinel = document.createElement("div");
scrollSentinel.style.position = "absolute";
scrollSentinel.style.top = "200px";
scrollSentinel.style.height = "1px";
scrollSentinel.style.width = "100%";
document.body.prepend(scrollSentinel);

const scrollNavObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      mobileNav.classList.remove("active");
      console.log("not active");
    } else {
      mobileNav.classList.add("active");
      console.log("active");
      // mobileNav.classList.add("text-[#b84b30]", "bg-[#fff]");
      // mobileNav.classList.remove("text-[#fff]");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

scrollNavObserver.observe(scrollSentinel);
