(() => {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const year = document.querySelector("[data-year]");

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  const closeNav = () => {
    nav?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  toggle?.addEventListener("click", () => {
    const nextOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(nextOpen));
    nav?.classList.toggle("is-open", nextOpen);
    document.body.classList.toggle("nav-open", nextOpen);
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const revealTargets = document.querySelectorAll(
    ".section-heading, .problem-card, .component-card, .volume-layer, .method-track, .upkeep-list article, .pack-card, .trust-card, .access-card"
  );

  revealTargets.forEach((target) => target.setAttribute("data-reveal", ""));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    revealTargets.forEach((target) => observer.observe(target));
  } else {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  }
})();
