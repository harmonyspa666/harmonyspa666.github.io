/* ============================================================
   Site-wide contact info — EDIT VALUES HERE ONLY.
   Any change made in this file will automatically appear
   everywhere on the site.
   ============================================================ */
const SITE_CONFIG = {
  phone:        "(240) 715-5939",
  phoneHref:    "tel:+12407155939",
  addressLine1: "1481 Chain Bridge Rd, Suite 300",
  addressLine2: "Mclean, VA 22101",
  addressFull:  "1481 Chain Bridge Rd, Suite 300, Mclean, VA 22101",
  email:        "hello@harmonywellness.com",
};

/* ------------------------------------------------------------
   Below this line: do not edit unless you know what you're doing.
   This injects the values above into any element marked with
   data-config="<key>" or data-config-html="<key>".
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  // Plain text replacement
  document.querySelectorAll("[data-config]").forEach(el => {
    const key = el.getAttribute("data-config");
    if (SITE_CONFIG[key] !== undefined) el.textContent = SITE_CONFIG[key];
  });

  // HTML replacement (lets you keep things like <br> in the address)
  document.querySelectorAll("[data-config-html]").forEach(el => {
    const key = el.getAttribute("data-config-html");
    if (key === "addressMultiline") {
      el.innerHTML = `${SITE_CONFIG.addressLine1}<br>${SITE_CONFIG.addressLine2}`;
    } else if (SITE_CONFIG[key] !== undefined) {
      el.innerHTML = SITE_CONFIG[key];
    }
  });

  // Auto-link phone numbers
  document.querySelectorAll('a[data-config-link="phone"]').forEach(el => {
    el.href = SITE_CONFIG.phoneHref;
    if (!el.textContent.trim()) el.textContent = SITE_CONFIG.phone;
  });

  // Auto-link emails
  document.querySelectorAll('a[data-config-link="email"]').forEach(el => {
    el.href = `mailto:${SITE_CONFIG.email}`;
    if (!el.textContent.trim()) el.textContent = SITE_CONFIG.email;
  });
});
