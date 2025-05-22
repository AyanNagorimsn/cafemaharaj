const textPath = document.querySelector("textPath");
textPath.style.color = "#fff";

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

const menu = {
  grill: [
    { type: "veg", name: "Plain Veg", price: 140 },
    { type: "veg", name: "Veg Cheese", price: 160 },
    { type: "veg", name: "Masala", price: 160 },
    { type: "veg", name: "Masala Cheese", price: 180 },
    { type: "veg", name: "Cheese Chilli", price: 180 },
    { type: "veg", name: "Cheese Chilli Paneer", price: 210 },
    { type: "veg", name: "Melting Cheese", price: 220 },
    { type: "veg", name: "Golden Paneer", price: 240 },
    { type: "veg", name: "Chocolate Cheese", price: 240 },

    { type: "nonveg", name: "Chi. Tikka", price: 180 },
    { type: "nonveg", name: "Chi. Tikka Club", price: 210 },
    { type: "nonveg", name: "Chi. Melting Cheese", price: 270 },
    { type: "nonveg", name: "Chi. Peri Peri", price: 270 },
    { type: "nonveg", name: "Chi. Creamy Tikka", price: 270 },
    { type: "nonveg", name: "Chi. Mayo Cheese", price: 270 },
    { type: "nonveg", name: "Chi. 4 Layer Cheese", price: 300 },
  ],

  burger: [
    { type: "veg", name: "Classic", price: 120 },
    { type: "veg", name: "Peri Peri", price: 150 },
    { type: "veg", name: "Tandoori", price: 150 },
    { type: "veg", name: "BBQ", price: 150 },
    { type: "veg", name: "Hot & Spicy", price: 150 },
    { type: "veg", name: "Mexican", price: 150 },
    { type: "veg", name: "Paneer Classic", price: 180 },
    { type: "veg", name: "Maharaja", price: 180 },

    { type: "nonveg", name: "Chi. Classic", price: 150 },
    { type: "nonveg", name: "Chi. Peri Peri", price: 180 },
    { type: "nonveg", name: "Chi. Tandoori", price: 180 },
    { type: "nonveg", name: "Chi. BBQ", price: 180 },
    { type: "nonveg", name: "Chi. Hot & Spicy", price: 180 },
    { type: "nonveg", name: "Chi. Mexican", price: 180 },
    { type: "nonveg", name: "Chi. Creamy Tikka", price: 180 },
    { type: "nonveg", name: "Chi. Maharaja", price: 220 },
  ],

  pizza: [
    { type: "veg", name: "Veg Cheese", price: 180 },
    { type: "veg", name: "Margherita", price: 180 },
    { type: "veg", name: "Plain Cheese", price: 180 },
    { type: "veg", name: "Cheese Corn", price: 180 },
    { type: "veg", name: "Golden Paneer", price: 210 },
    { type: "veg", name: "Tandoori Paneer", price: 240 },
    { type: "veg", name: "Maharaja Spl.", price: 330 },
    { type: "veg", name: "Cheese Burst", price: 240 },

    { type: "nonveg", name: "Chi. Tikka", price: 230 },
    { type: "nonveg", name: "Chi. Schewan", price: 230 },
    { type: "nonveg", name: "Chi. Double Cheese", price: 250 },
    { type: "nonveg", name: "Chi. Cheese Corn", price: 230 },
    { type: "nonveg", name: "Chi. Creamy Tikka", price: 240 },
    { type: "nonveg", name: "Chi. BBQ", price: 240 },
    { type: "nonveg", name: "Chi. Peri Peri", price: 240 },
    { type: "nonveg", name: "Chi. Tandoori", price: 240 },
    { type: "nonveg", name: "Chi. Cheese Burst", price: 270 },
  ],

  rolls: [
    { type: "veg", name: "Plain Roll", price: 110 },
    { type: "veg", name: "Veg Cheese", price: 130 },
    { type: "veg", name: "Paneer Cheese", price: 150 },
    { type: "veg", name: "Tandoori Tadka", price: 150 },
    { type: "veg", name: "Paneer Tandoori Tadka", price: 160 },

    { type: "nonveg", name: "Double Egg Cheese", price: 150 },
    { type: "nonveg", name: "Chi. Classic", price: 180 },
    { type: "nonveg", name: "Chi. Cheese", price: 180 },
    { type: "nonveg", name: "Chi. Egg Cheese", price: 180 },
    { type: "nonveg", name: "Chi. Schezwan Cheese", price: 180 },
    { type: "nonveg", name: "Chi. Mayo Cheese", price: 180 },
    { type: "nonveg", name: "Chi. Creamy Tikka", price: 180 },
    { type: "nonveg", name: "Chi. Tandoori Tadka", price: 200 },
    { type: "nonveg", name: "Chi. Tikka", price: 200 },
    { type: "nonveg", name: "Chi. Tikka Cheese", price: 200 },
  ],

  pasta: [
    { type: "veg", name: "White Sauce", price: 180 },
    { type: "veg", name: "Red Sauce", price: 180 },
    { type: "veg", name: "Mongolian", price: 180 },
    { type: "veg", name: "Mix Sauce", price: 210 },

    { type: "nonveg", name: "Chi. White Sauce", price: 240 },
    { type: "nonveg", name: "Chi. Red Sauce", price: 240 },
  ],

  openSandwich: [
    { type: "veg", name: "Paneer", price: 270 },
    { type: "veg", name: "Chilli Milli", price: 270 },
    { type: "veg", name: "Tandoori Paneer", price: 270 },
    { type: "veg", name: "Cheese Mayo", price: 270 },

    { type: "nonveg", name: "Chi. Classic", price: 320 },
    { type: "nonveg", name: "Chi. Tandoori", price: 320 },
    { type: "nonveg", name: "Chi. Mayo", price: 320 },
    { type: "nonveg", name: "Chi. Chilli Milli", price: 320 },
  ],

  garlicBread: [
    { name: "Classic (6 pcs)", price: 150 },
    { name: "Cheese", price: 180 },
    { name: "Paneer", price: 230 },
  ],
  fries: [
    { name: "French Fries", price: 110 },
    { name: "Masala", price: 120 },
    { name: "Peri Peri", price: 150 },
    { name: "Cheese", price: 200 },
  ],
  milkShakes: [
    { name: "Cold Coffee", price: 120 },
    { name: "Cold Coffee with Ice Cream", price: 150 },
    { name: "Chocolate", price: 160 },
    { name: "Chocolate with Ice Cream", price: 210 },
    { name: "KitKat", price: 240 },
    { name: "KitKat with Ice Cream", price: 240 },
  ],
  pavBhaji: [
    { name: "Classic", price: 150 },
    { name: "Paneer", price: 210 },
    { name: "Cheese", price: 230 },
  ],
  extra: [
    { name: "Plain Pav", price: 8 },
    { name: "Butter Pav", price: 16 },
    { name: "Masala Pav", price: 30 },
  ],
};
const menuDiv = document.getElementById("menu");

Object.entries(menu).forEach(([category, items]) => {
  const vegItems = items.filter((item) => item.type === "veg");
  const nonVegItems = items.filter((item) => item.type === "nonveg");
  const untaggedItems = items.filter((item) => !item.type);

  const categoryTitle = category
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());

  const formatItems = (items) =>
    items
      .map((item) => `<p>${item.name} <span class="float-right">${item.price}</span></p>`)
      .join("");

  const vegHTML = vegItems.length
    ? `<i class="text-sm font-semibold mt-4 inline-block">VEG----------------------</i>${formatItems(
        vegItems
      )}`
    : "";

  const nonVegHTML = nonVegItems.length
    ? `<i class="text-sm font-semibold mt-4 inline-block">NON-VEG----------------------</i>${formatItems(
        nonVegItems
      )}`
    : "";

  const untaggedHTML = formatItems(untaggedItems);

  const html = `
    <div>
      <h2 class="text-2xl font-bold mb-4 text-nowrap">${categoryTitle}</h2>
      <div class="space-y-2">
        ${vegHTML}
        ${nonVegHTML}
        ${untaggedHTML}
      </div>
    </div>
  `;

  menuDiv.insertAdjacentHTML("beforeend", html);
});

let navbar = document.querySelector("nav");
let target = document.querySelector(".keep-scrolling");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.classList.remove("text-[#e53b10]");
      } else {
        navbar.classList.add("text-[#e53b10]");
      }
    });
  },
  {
    root: null, // viewport
    threshold: 1, // 50% of target is visible
  }
);

observer.observe(target);
