"use strict";

const root = document.documentElement;
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".rail-nav");
const navigationLinks = [...document.querySelectorAll(".rail-link")];
const themeButton = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const sections = [...document.querySelectorAll("[data-section]")];
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const savedTheme = localStorage.getItem("priangan-retro-theme");

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute(
    "aria-label",
    `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
  );
  themeColor.setAttribute("content", theme === "dark" ? "#171717" : "#f4e51c");
}

applyTheme(savedTheme || "light");

themeButton.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("priangan-retro-theme", nextTheme);
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("open", !isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  });
});

const revealElements = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleSection) return;

      navigationLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.hash === `#${visibleSection.target.id}`,
        );
      });
    },
    { rootMargin: "-20% 0px -55%", threshold: [0.1, 0.3, 0.6] },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function updateClock() {
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

  document.querySelector("#local-time").textContent = `WIB ${time}`;
}

document.querySelector("#year").textContent = new Date().getFullYear();
updateClock();
window.setInterval(updateClock, 60_000);
