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
      el.appendChild(icon);
      el.appendChild(label);
    } else {
      el = document.createElement("span");
      el.className = "link-btn coming-soon";
      el.setAttribute("role", "link");
      el.setAttribute("aria-disabled", "true");
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
})();
