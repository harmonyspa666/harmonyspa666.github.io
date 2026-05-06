/* ============================================================
   Site-wide contact info — EDIT VALUES HERE ONLY.
   Any change made in this file will automatically appear
   everywhere on the site.
   ============================================================ */
const SITE_CONFIG = {
  phone:        "(703) 555-0192",
  phoneHref:    "tel:+17035550192",
  addressLine1: "1234 Chain Bridge Rd",
  addressLine2: "McLean, VA 22101",
  addressFull:  "1234 Chain Bridge Rd, McLean, VA 22101",
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
