/* TCS Link Hub — renders link buttons from data/links.js
 * Session 1: static rendering only. No animations, no carousel.
 * Icons: Lucide (https://lucide.dev), loaded via CDN in index.html.
 */
(function () {
  "use strict";

  var container = document.getElementById("links");
  if (!container || typeof links === "undefined") return;

  var fragment = document.createDocumentFragment();

  links.forEach(function (link) {
    var icon = document.createElement("i");
    icon.className = "icon";
    icon.setAttribute("data-lucide", link.iconName || "link");
    icon.setAttribute("aria-hidden", "true");

    var label = document.createElement("span");
    label.className = "label";
    label.textContent = link.label;

    var el;

    if (link.active) {
      el = document.createElement("a");
      el.className = "link-btn active";
      el.href = link.url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.setAttribute("aria-label", link.label);
      el.appendChild(icon);
      el.appendChild(label);
    } else {
      el = document.createElement("span");
      el.className = "link-btn coming-soon";
      el.setAttribute("role", "link");
      el.setAttribute("aria-disabled", "true");
      el.setAttribute("aria-label", link.label);
      el.appendChild(icon);
      el.appendChild(label);

      if (link.comingSoon) {
        var badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = "Coming Soon";
        el.appendChild(badge);
      }
    }

    fragment.appendChild(el);
  });

  container.appendChild(fragment);

  // Swap all [data-lucide] placeholders (buttons + contact section) for SVGs.
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  var revealItems = [
    { element: document.querySelector(".logo"), delay: 0 },
    { element: document.querySelector(".school-name"), delay: 100 },
    { element: document.querySelector(".tagline"), delay: 200 }
  ];

  var renderedButtons = document.querySelectorAll(".link-btn");
  renderedButtons.forEach(function (button, index) {
    revealItems.push({ element: button, delay: 300 + (index * 80) });
  });

  revealItems.push(
    { element: document.querySelector(".carousel-track-wrapper"), delay: 700 },
    { element: document.querySelector(".contact"), delay: 850 },
    { element: document.querySelector(".footer"), delay: 950 }
  );

  revealItems.forEach(function (item) {
    if (!item.element) return;

    item.element.classList.add("reveal");

    window.setTimeout(function () {
      item.element.classList.add("is-visible");
    }, item.delay);
  });

  var carouselCards = document.querySelectorAll(".carousel-card");
  carouselCards.forEach(function (card) {
    var image = card.querySelector("img");
    if (!image) return;

    card.classList.add("is-loading");

    if (image.complete) {
      card.classList.remove("is-loading");
      card.classList.add("is-loaded");
      return;
    }

    image.addEventListener("load", function () {
      card.classList.remove("is-loading");
      card.classList.add("is-loaded");
    }, { once: true });
  });

  var carouselWrapper = document.querySelector(".carousel-track-wrapper");
  var carouselTrack = document.querySelector(".carousel-track");

  if (carouselWrapper && carouselTrack) {
    var startX = 0;
    var cardWidth = 172;

    carouselWrapper.addEventListener("touchstart", function (event) {
      startX = event.changedTouches[0].clientX;
      carouselTrack.style.animationPlayState = "paused";
    }, { passive: true });

    carouselWrapper.addEventListener("touchend", function (event) {
      var endX = event.changedTouches[0].clientX;
      var diff = startX - endX;

      if (Math.abs(diff) > 30) {
        carouselTrack.style.animation = "none";
        carouselTrack.style.transform = "translateX(" + (diff > 0 ? "-" : "") + cardWidth + "px)";

        window.setTimeout(function () {
          carouselTrack.style.transform = "";
          carouselTrack.style.animation = "";
          carouselTrack.style.animationPlayState = "running";
        }, 350);
      }

      carouselTrack.style.animationPlayState = "running";
    }, { passive: true });
  }
})();
