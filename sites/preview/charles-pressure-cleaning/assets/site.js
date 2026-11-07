/* Kloverin home-services template: builds the page from site-settings.js.
   No need to edit this file for a normal mock-up. */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) {
    document.body.insertAdjacentHTML("afterbegin", "<p style='padding:20px;color:#b00;font:16px sans-serif'>site-settings.js is missing or has a typo (check for a missing comma or quote).</p>");
    return;
  }
  var B = S.business || {}, A = S.area || {}, R = S.reviews || {}, H = S.hero || {};

  /* ---------- helpers ---------- */
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  function cityShort(c) { return String(c || "").split(",")[0].trim(); }
  var CITY = cityShort(A.city);
  function fill(s) { return String(s == null ? "" : s).replace(/\{city\}/g, CITY).replace(/\{name\}/g, B.name || ""); }
  function get(path) { return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, S); }
  function has(path) { var v = get(path); return Array.isArray(v) ? v.length > 0 : !!v; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function use(id, cls) {
    var ns = "http://www.w3.org/2000/svg", s = document.createElementNS(ns, "svg"), u = document.createElementNS(ns, "use");
    s.setAttribute("class", cls || "i"); s.setAttribute("aria-hidden", "true"); u.setAttribute("href", "#" + id); s.appendChild(u); return s;
  }
  function stars(n) {
    var w = el("span", "stars"); w.setAttribute("role", "img"); w.setAttribute("aria-label", n + " out of 5 stars");
    for (var i = 0; i < Math.round(n || 5); i++) w.appendChild(use("i-star")); return w;
  }
  function initials(name) {
    var w = String(name || "").replace(/[^A-Za-z0-9 &]/g, " ").split(/\s+/).filter(function (x) { return x && !/^(co|inc|llc|the|and|&)$/i.test(x); });
    return (w.slice(0, 2).map(function (x) { return x[0]; }).join("") || "K").toUpperCase();
  }
  function tel(p) { var d = String(p || "").replace(/[^\d+]/g, ""); return d ? "tel:" + d : "#quote"; }
  /* Ask Google/Unsplash for a photo big enough for where it's shown (sharp on retina screens). */
  function sized(src, w) {
    src = String(src || "");
    if (/googleusercontent\.com\//.test(src)) {
      var base = src.replace(/=[^\/]*$/, "");
      return base + "=w" + w;
    }
    if (/images\.unsplash\.com\//.test(src)) {
      return src.replace(/([?&])w=\d+/, "$1w=" + w).replace(/([?&])q=\d+/, "$1q=85");
    }
    return src;
  }
  function img(src, alt, eager) {
    var i = el("img"); i.src = src; i.alt = alt || ""; i.decoding = "async"; if (!eager) i.loading = "lazy";
    i.onerror = function () { i.remove(); }; return i;
  }

  var ICONS = {
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3.6 17.4a1.9 1.9 0 0 0 2.7 2.7l5.9-5.9a4 4 0 0 0 5.2-5.2l-2.5 2.5-2.4-.3-.3-2.4z"/>',
    drop: '<path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"/><path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5"/>',
    heater: '<rect x="6" y="3" width="12" height="18" rx="3"/><path d="M10 15c0-1.4 2-2.3 2-4 1 1 2 2.2 2 3.5a2 2 0 0 1-4 .5z"/><path d="M9 7h6"/>',
    drain: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/><path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5"/>',
    pipe: '<path d="M3 8h8a3 3 0 0 1 3 3v10"/><path d="M3 4v8M10 18h8M14 15v6"/><path d="M3 12h6a1 1 0 0 1 1 1v8"/>',
    toilet: '<path d="M6 3h5v7H6z"/><path d="M4 10h16a8 8 0 0 1-8 8h0a8 8 0 0 1-8-8z"/><path d="M9 18l-1 3h8l-1-3"/>',
    bolt: '<path d="M13 2 4.5 13.5H12L11 22l8.5-11.5H12z"/>',
    panel: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h3M8 11h3M8 15h3M13 7h3M13 11h3M13 15h3"/>',
    outlet: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M10 9v3M14 9v3M10.5 16h3"/>',
    light: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
    fan: '<circle cx="12" cy="12" r="1.8"/><path d="M12 10.2c-.5-3.2.5-6.2 3-6.2 2 0 2.5 2.5 1 4.2-1.2 1.3-2.6 1.8-4 2zM13.8 12c3.2-.5 6.2.5 6.2 3 0 2-2.5 2.5-4.2 1-1.3-1.2-1.8-2.6-2-4zM12 13.8c.5 3.2-.5 6.2-3 6.2-2 0-2.5-2.5-1-4.2 1.2-1.3 2.6-1.8 4-2zM10.2 12C7 12.5 4 11.5 4 9c0-2 2.5-2.5 4.2-1 1.3 1.2 1.8 2.6 2 4z"/>',
    hammer: '<path d="M14 6 9.5 10.5l4 4L18 10"/><path d="M11.5 12.5 3.8 20.2a1.4 1.4 0 0 0 2 2l7.7-7.7"/><path d="M14 6l2-2 4 4-2 2"/>',
    drill: '<path d="M4 7h11l2 2v3l-2 2H4z"/><path d="M17 10.5h4"/><path d="M7 14l-1 7h4l1-7"/>',
    paint: '<rect x="4" y="3" width="14" height="6" rx="1.5"/><path d="M18 6h2v5h-8v3"/><rect x="10.5" y="14" width="3" height="7" rx="1"/>',
    door: '<path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"/><path d="M4 21h16"/><circle cx="14.5" cy="12" r="1" fill="currentColor"/>',
    tile: '<rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1"/><rect x="13" y="3.5" width="7.5" height="7.5" rx="1"/><rect x="3.5" y="13" width="7.5" height="7.5" rx="1"/><rect x="13" y="13" width="7.5" height="7.5" rx="1"/>',
    home: '<path d="M3 11 12 3.5 21 11"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5.5h4V20"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.5 3.2 8.2 7.5 9.5 4.3-1.3 7.5-5 7.5-9.5V6z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19l7-7"/>',
    snow: '<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/><path d="m9.5 4.5 2.5 2 2.5-2M9.5 19.5l2.5-2 2.5 2"/>',
    flame: '<path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-4-9-1.5 2-2 3.5-2 5-1-1-1.5-2-1.5-3C8 10 6 12.5 6 15a6 6 0 0 0 6 6z"/>',
    check: '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 12.2 2.4 2.4 4.8-5"/>'
  };
  function iconSvg(name, sw) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 1.7) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.check) + "</svg>"; }
  function tradeIcon(t) { t = String(t || ""); return /plumb|drain|water|wash/i.test(t) ? "drop" : /electric/i.test(t) ? "bolt" : /hvac|heat|air|cool/i.test(t) ? "snow" : /roof/i.test(t) ? "home" : /paint/i.test(t) ? "paint" : /lawn|landscap/i.test(t) ? "leaf" : "wrench"; }

  /* ---------- color ---------- */
  function rgb(color) {
    var c = document.createElement("canvas").getContext("2d"); c.fillStyle = "#000"; c.fillStyle = color; var h = c.fillStyle;
    if (h[0] !== "#") return null; return [1, 3, 5].map(function (i) { return parseInt(h.substr(i, 2), 16); });
  }
  function lum(c) { var l = c.map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]; }
  function contrast(a, b) { var x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  function textOn(color) { var c = rgb(color); if (!c) return "#fff"; return contrast(c, [255, 255, 255]) >= 3 ? "#ffffff" : "#111111"; }
  function inkOnWhite(color) {
    var c = rgb(color); if (!c) return color;
    for (var k = 0; k < 12 && contrast(c, [255, 255, 255]) < 4.6; k++) c = c.map(function (v) { return Math.round(v * 0.86); });
    return "rgb(" + c.join(",") + ")";
  }
  var C = S.colors || {}, st = document.documentElement.style;
  if (C.primary) { st.setProperty("--primary", C.primary); st.setProperty("--on-primary", textOn(C.primary)); st.setProperty("--primary-ink", inkOnWhite(C.primary)); }
  if (C.accent) { st.setProperty("--accent", C.accent); st.setProperty("--on-accent", textOn(C.accent)); }
  if (C.dark) st.setProperty("--dark", C.dark);

  /* ---------- style: "luxe" (serif headlines) or "modern" (clean sans) ---------- */
  var STYLES = ["luxe", "modern", "dark", "bold", "warm"];
  document.body.classList.add("theme-" + (STYLES.indexOf(S.style) >= 0 ? S.style : "luxe"));
  var LAYOUT = (S.hero || {}).layout;
  if (["full", "center", "panel", "split"].indexOf(LAYOUT) < 0) LAYOUT = "split";
  document.getElementById("hero").classList.add("hero--" + LAYOUT);
  if (LAYOUT !== "split") document.body.classList.add("hero-over");

  /* ---------- head: title, description, social preview ---------- */
  var title = (B.name || "Home Services") + " | " + (B.trade || "Home services") + " in " + (A.city || CITY);
  var description = fill(B.tagline || H.subhead || "");
  document.title = title;
  $('meta[name="description"]').setAttribute("content", description);
  function meta(attr, key, val) { if (!val) return; var m = el("meta"); m.setAttribute(attr, key); m.setAttribute("content", val); document.head.appendChild(m); }
  meta("name", "theme-color", C.dark || "#0C1724");
  if (S.samplePreview || /\/preview\//.test(location.pathname)) meta("name", "robots", "noindex, nofollow");
  meta("property", "og:title", title);
  meta("property", "og:description", description);
  meta("property", "og:type", "website");
  meta("property", "og:image", H.image ? sized(H.image, 1200) : S.logo);

  /* ---------- simple fields ---------- */
  $$("[data-text]").forEach(function (n) { n.textContent = fill(get(n.getAttribute("data-text"))); });
  $$("[data-city]").forEach(function (n) { n.textContent = CITY; });
  $$("[data-call]").forEach(function (a) { a.setAttribute("href", tel(B.phone)); });
  $$("[data-needs]").forEach(function (n) { if (!has(n.getAttribute("data-needs"))) n.hidden = true; });
  var bar = $("#exampleBar");
  if (S.samplePreview) bar.hidden = false;
  else if (/\/preview\//.test(location.pathname)) {
    bar.hidden = false; bar.textContent = "";
    bar.appendChild(document.createTextNode("Free preview made for " + (B.name || "you") + " by Kloverin. Want it live on your own domain? "));
    var bl = el("a", null, "Call or text (469) 803-1034"); bl.href = "tel:+14698031034"; bl.style.color = "inherit"; bl.style.fontWeight = "600"; bar.appendChild(bl);
  } else bar.hidden = true;
  if (!B.responseTime) $(".live__note").hidden = true;

  /* ---------- logo ---------- */
  var mark = $("#brandMark"), brand = $(".brand");
  if (String(B.name || "").length > 24) brand.classList.add("brand--long");
  function glyph() { brand.classList.remove("has-logo"); mark.innerHTML = iconSvg(tradeIcon(B.trade), 2); }
  if (S.logo) {
    brand.classList.add("has-logo");
    var li = img(S.logo, (B.name || "") + " logo", true); li.onerror = glyph; mark.appendChild(li);
    var fav = el("link"); fav.rel = "icon"; fav.href = S.logo; document.head.appendChild(fav);
  } else glyph();
  var topbar = $(".top");
  function stick() { topbar.classList.toggle("is-stuck", window.scrollY > (LAYOUT === "split" ? 8 : 60)); }
  window.addEventListener("scroll", stick, { passive: true }); stick();

  /* ---------- hero ---------- */
  var media = $("#heroPhoto");
  if (H.image) {
    var hi = img(sized(H.image, 2800), (B.name || "") + " at work", true); hi.style.objectPosition = H.focus || "center";
    hi.onerror = function () { hi.remove(); media.classList.add("is-empty"); ready(); };
    hi.onload = ready;
    media.appendChild(hi);
    setTimeout(ready, 900);
  } else { media.classList.add("is-empty"); ready(); }
  function ready() { requestAnimationFrame(function () { document.body.classList.add("is-ready"); }); }
  var hr = $("#heroRating");
  if (R.rating) {
    hr.appendChild(stars(R.rating));
    var ht = el("span"); ht.appendChild(el("strong", null, Number(R.rating).toFixed(1)));
    ht.appendChild(document.createTextNode(R.count ? " from " + R.count + " Google reviews" : " on Google"));
    hr.appendChild(ht);
  } else hr.hidden = true;
  var checks = (H.highlights && H.highlights.length) ? H.highlights : [B.license ? "Licensed and insured" : "", "Upfront pricing", B.warranty || ""].filter(Boolean);
  checks.slice(0, 4).forEach(function (c) { var li = el("li"); li.appendChild(use("i-check")); li.appendChild(document.createTextNode(fill(c))); $("#heroChecks").appendChild(li); });

  /* ---------- open-now status ---------- */
  var DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], DAYNAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var HO = S.hours || {};
  function parseSchedule(lines) {
    var week = [[], [], [], [], [], [], []];
    (lines || []).forEach(function (line) {
      var m = String(line).trim().match(/^([A-Za-z]{3})[a-z]*(?:\s*-\s*([A-Za-z]{3})[a-z]*)?\s+(\d{1,2}):?(\d{2})?\s*-\s*(\d{1,2}):?(\d{2})?/);
      if (!m) return;
      var a = DAYS.indexOf(m[1].toLowerCase()), b = m[2] ? DAYS.indexOf(m[2].toLowerCase()) : a;
      if (a < 0 || b < 0) return;
      var open = +m[3] * 60 + (+m[4] || 0), close = +m[5] * 60 + (+m[6] || 0);
      for (var d = a; ; d = (d + 1) % 7) { week[d].push([open, close]); if (d === b) break; }
    });
    return week;
  }
  function nowIn(tz) {
    try {
      var p = new Intl.DateTimeFormat("en-US", { timeZone: tz || undefined, weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(new Date());
      var o = {}; p.forEach(function (x) { o[x.type] = x.value; });
      return { day: DAYS.indexOf(o.weekday.toLowerCase().slice(0, 3)), min: (+o.hour % 24) * 60 + +o.minute };
    } catch (e) { var d = new Date(); return { day: d.getDay(), min: d.getHours() * 60 + d.getMinutes() }; }
  }
  function clock(m) { var h = Math.floor(m / 60) % 24, mm = m % 60, ap = h >= 12 ? "PM" : "AM", h12 = h % 12 || 12; return h12 + (mm ? ":" + String(mm).padStart(2, "0") : "") + " " + ap; }
  var week = parseSchedule(HO.schedule), status = $("#status"), statusText = $("#statusText");
  (function () {
    var any = week.some(function (d) { return d.length; });
    if (!any) { status.hidden = true; if (!B.responseTime) $("#live").hidden = true; return; }
    var n = nowIn(HO.timezone), today = week[n.day];
    for (var i = 0; i < today.length; i++) {
      if (n.min >= today[i][0] && n.min < today[i][1]) {
        status.classList.add("is-open");
        statusText.textContent = (today[i][0] === 0 && today[i][1] >= 1440) ? "Open 24 hours" : "Open now until " + clock(today[i][1]);
        return;
      }
    }
    if (HO.emergency) { status.classList.add("is-open"); statusText.textContent = "Emergency line open 24/7"; return; }
    for (var k = 0; k < 8; k++) {
      var d = (n.day + k) % 7, slots = week[d].slice().sort(function (x, y) { return x[0] - y[0]; });
      for (var j = 0; j < slots.length; j++) {
        if (k === 0 && slots[j][0] <= n.min) continue;
        statusText.textContent = "Closed now. Opens " + (k === 0 ? "today" : k === 1 ? "tomorrow" : DAYNAMES[d]) + " at " + clock(slots[j][0]);
        return;
      }
    }
  })();

  /* ---------- proof strip ---------- */
  (function () {
    var pl = $("#proofList"), n = 0;
    function item(big, small, extra) { var d = el("div"), t = el("dt"); if (typeof big === "string") t.textContent = big; else t.appendChild(big); if (extra) t.appendChild(extra); d.appendChild(t); d.appendChild(el("dd", null, small)); pl.appendChild(d); n++; }
    if (R.rating) item(Number(R.rating).toFixed(1), "Google rating", stars(R.rating));
    if (R.count) item(String(R.count), "Google reviews");
    if ((A.cities || []).length) item(String(A.cities.length), (A.cities.length === 1 ? "town" : "towns") + " served around " + CITY);
    if (B.phone) { var pa = el("a", null, B.phone); pa.href = tel(B.phone); item(pa, "Call or text"); }
    if (n < 2) $("#proof").hidden = true;
  })();

  /* ---------- services ---------- */
  var list = $("#servicesList"), sel = $("#serviceSelect");
  sel.appendChild(new Option("Choose one", ""));
  (S.services || []).forEach(function (s) {
    var li = el("li", "svc"), ic = el("span", "svc__icon");
    ic.innerHTML = iconSvg(s.icon);
    li.appendChild(ic); li.appendChild(el("h3", null, fill(s.name))); li.appendChild(el("p", null, fill(s.text)));
    list.appendChild(li); sel.appendChild(new Option(s.name, s.name));
  });
  if ((S.services || []).length % 3 !== 0 || (S.services || []).length < 6) {
    var cta = el("li", "svc svc--cta");
    cta.appendChild(el("h3", null, "Don't see your job?")); cta.appendChild(el("p", null, "We probably do it. Call and ask."));
    var go = el("a", "svc__go"); go.href = tel(B.phone); go.appendChild(use("i-phone")); go.appendChild(document.createTextNode(B.phone || "Call us")); cta.appendChild(go);
    list.appendChild(cta);
  }
  sel.appendChild(new Option("Something else", "Other"));

  /* ---------- gallery ---------- */
  var gal = $("#gallery"), shots = (S.gallery || []).slice(0, 6);
  gal.classList.add("n" + shots.length);
  shots.forEach(function (g, i) {
    var f = el("figure", "shot"), box = el("div", "shot__img"); box.appendChild(img(sized(g.src, (i === 0 || i === 3) ? 2400 : 1600), g.caption || "Recent work")); f.appendChild(box);
    if (g.caption) f.appendChild(el("figcaption", null, fill(g.caption)));
    gal.appendChild(f);
  });

  /* ---------- steps ---------- */
  (S.process || []).forEach(function (p) {
    var li = el("li", "step"); li.appendChild(el("h3", null, fill(p.title))); li.appendChild(el("p", null, fill(p.text))); $("#steps").appendChild(li);
  });

  /* ---------- reviews ---------- */
  var items = R.items || [];
  if (items.length) {
    var score = $("#score");
    if (R.rating) {
      score.appendChild(el("span", "score__num", Number(R.rating).toFixed(1)));
      var sm = el("span", "score__meta"); sm.appendChild(stars(R.rating));
      if (R.link) { var rl = el("a", null, (R.count ? R.count + " reviews" : "Reviews") + " on Google"); rl.href = R.link; rl.target = "_blank"; rl.rel = "noopener"; sm.appendChild(rl); }
      else sm.appendChild(el("span", null, (R.count ? "From " + R.count + " reviews" : "Rating") + " on Google"));
      score.appendChild(sm);
    } else score.hidden = true;
    function cap(r) {
      var c = el("figcaption"); c.appendChild(el("span", "avatar", initials(r.name)));
      var who = el("span", null, r.name || "Customer"); who.appendChild(el("small", null, "Google review")); c.appendChild(who); return c;
    }
    var shown = items.slice(0, 4); $("#reviewList").classList.add("r" + (shown.length - 1));
    shown.forEach(function (r, i) {
      var m = el("figure", i === 0 ? "review review--feature" : "review"); m.appendChild(stars(r.stars || 5)); m.appendChild(el("blockquote", null, i === 0 ? fill(r.text) : "“" + fill(r.text) + "”")); m.appendChild(cap(r));
      $("#reviewList").appendChild(m);
    });
  }

  /* ---------- about ---------- */
  var AB = S.about || {};
  if (AB.photo) $("#aboutPhoto").appendChild(img(sized(AB.photo, 1800), AB.title || "Our team")); else $("#aboutPhoto").hidden = true;
  if (!AB.signature) $(".about__sig").hidden = true;
  var facts = $("#facts");
  function fact(big, small) { var d = el("div"); d.appendChild(el("dt", null, big)); d.appendChild(el("dd", null, small)); facts.appendChild(d); }
  if (B.yearsInBusiness) fact(B.yearsInBusiness + " yrs", "serving " + CITY);
  if (B.warranty) { var wm = String(B.warranty).match(/^(\S+)\s+(.*)$/); fact(wm ? wm[1] : B.warranty, wm ? wm[2] : ""); }
  if (!facts.children.length) facts.hidden = true;

  /* ---------- quote backdrop ---------- */
  var qsrc = (S.quoteForm && S.quoteForm.image) || H.image || ((S.gallery || [])[0] || {}).src;
  if (qsrc) $("#quoteBg").appendChild(img(sized(qsrc, 2400), ""));

  /* ---------- area ---------- */
  (A.cities || []).forEach(function (c) { var li = el("li"); li.appendChild(use("i-pin")); li.appendChild(document.createTextNode(c)); $("#towns").appendChild(li); });
  var hl = $("#hoursList");
  (HO.schedule || []).forEach(function (line) {
    var m = String(line).match(/^(\S+)\s+(.*)$/); if (!m) return;
    var DN = { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" };
    if (/00:00\s*-\s*24:00/.test(m[2])) { var DN0 = { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" }; hl.appendChild(el("dt", null, m[1].split("-").map(function (d) { return DN0[d.slice(0, 3).toLowerCase()] || d; }).join(" to "))); hl.appendChild(el("dd", null, "Open 24 hours")); return; }
    var days = m[1].split("-").map(function (d) { return DN[d.slice(0, 3).toLowerCase()] || d; }).join(" to "), times = m[2].replace(/(\d{1,2}):?(\d{2})?/g, function (_, h, mm) { return clock(+h * 60 + (+mm || 0)); }).replace(/\s*-\s*/, " to ");
    hl.appendChild(el("dt", null, days)); hl.appendChild(el("dd", null, times));
  });
  if (HO.emergency) { hl.appendChild(el("dt", null, "Emergencies")); hl.appendChild(el("dd", null, "24/7")); }
  var map = $("#map");
  if (A.showMap && A.city) {
    var fr = el("iframe"); fr.title = "Map of " + A.city; fr.loading = "lazy"; fr.referrerPolicy = "no-referrer-when-downgrade";
    fr.src = "https://www.google.com/maps?q=" + encodeURIComponent(A.city) + "&z=11&output=embed"; map.appendChild(fr);
  } else map.hidden = true;

  /* ---------- FAQ ---------- */
  (S.faq || []).forEach(function (f) {
    var d = el("details"), s = el("summary"); s.appendChild(el("span", null, fill(f.q))); s.appendChild(use("i-plus"));
    d.appendChild(s); d.appendChild(el("p", null, fill(f.a))); $("#faqList").appendChild(d);
  });

  /* ---------- footer ---------- */
  var fc = $("#footContact");
  if (B.phone) { var pa = el("a", null, B.phone); pa.href = tel(B.phone); fc.appendChild(pa); }
  if (B.email) { if (fc.childNodes.length) fc.appendChild(document.createTextNode("  /  ")); var ma = el("a", null, B.email); ma.href = "mailto:" + B.email; fc.appendChild(ma); }
  $("#footMeta").textContent = [B.address, B.license].filter(Boolean).join(". ");
  $("#year").textContent = new Date().getFullYear();

  /* ---------- search engine data (LocalBusiness) ---------- */
  try {
    var ld = {
      "@context": "https://schema.org", "@type": /plumb/i.test(B.trade) ? "Plumber" : /electric/i.test(B.trade) ? "Electrician" : /hvac|heat|air/i.test(B.trade) ? "HVACBusiness" : /roof/i.test(B.trade) ? "RoofingContractor" : "HomeAndConstructionBusiness",
      name: B.name, description: description, telephone: B.phone, email: B.email || undefined,
      image: H.image || undefined, logo: S.logo || undefined,
      areaServed: (A.cities || []).map(function (c) { return { "@type": "City", name: c }; }),
      address: B.address ? B.address : { "@type": "PostalAddress", addressLocality: CITY, addressRegion: (String(A.city).split(",")[1] || "").trim() || undefined }
    };
    if (R.rating && R.count) ld.aggregateRating = { "@type": "AggregateRating", ratingValue: R.rating, reviewCount: R.count };
    var sc = el("script"); sc.type = "application/ld+json"; sc.textContent = JSON.stringify(ld); document.head.appendChild(sc);
  } catch (e) {}

  /* ---------- quote form ---------- */
  var Q = S.quoteForm || {}, form = $("#quoteForm"), fs = $("#formStatus");
  function endpoint() { if (!Q.sendTo || Q.sendTo === "formsubmit") return B.email ? "https://formsubmit.co/ajax/" + encodeURIComponent(B.email) : ""; return Q.sendTo; }
  form.addEventListener("submit", function (e) {
    e.preventDefault(); fs.className = "form__status"; fs.textContent = "";
    var bad = false;
    ["name", "phone"].forEach(function (k) { var i = form.elements[k], ok = i.value.trim().length > (k === "phone" ? 6 : 0); i.classList.toggle("bad", !ok); if (!ok) bad = true; });
    if (bad) { fs.className = "form__status err"; fs.textContent = "Add your name and a phone number so we can reach you."; return; }
    if (form.elements._honey.value) return;
    var data = {}; ["name", "phone", "email", "service", "zip", "message"].forEach(function (k) { data[k] = form.elements[k].value.trim(); });
    data._subject = "New quote request: " + (data.service || "General") + " (" + data.name + ")"; data._template = "table";
    var first = data.name.split(" ")[0], url = endpoint(), btn = form.querySelector("[type=submit]");
    if (S.samplePreview || !url) {
      fs.className = "form__status ok";
      fs.textContent = S.samplePreview ? "Request sent. (This is an example site, so nothing was actually sent.)" : "This is a preview, so nothing was sent. On your live site, requests like this go straight to your inbox.";
      form.reset(); return;
    }
    btn.disabled = true; btn.textContent = "Sending…";
    fetch(url, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); })
      .then(function () { fs.className = "form__status ok"; fs.textContent = "Thanks, " + first + ". Your request is in and we'll reach out shortly."; form.reset(); })
      .catch(function () { fs.className = "form__status err"; fs.textContent = "Your request didn't go through. Call us at " + (B.phone || "the number above") + " and we'll help right away."; })
      .then(function () { btn.disabled = false; btn.textContent = "Send my request"; });
  });

  /* ---------- Kloverin chatbot ---------- */
  var CB = S.chatbot || {};
  if (CB.enabled !== false) {
    var chat = $("#chat"), panel = $("#chatPanel"), msgs = $("#chatMsgs"), input = $("#chatInput"), hist = [], started = false;
    chat.hidden = false; $("#chatAvatar").textContent = initials(B.name);
    function say(role, t) { var m = el("div", "msg msg--" + (role === "user" ? "user" : "bot"), t); msgs.appendChild(m); msgs.scrollTop = msgs.scrollHeight; return m; }
    function chips() {
      var w = el("div", "chips"), c = el("a", null, "Call " + (B.phone || "us")); c.href = tel(B.phone); w.appendChild(c);
      var q = el("button", null, "Get a quote"); q.type = "button"; q.onclick = function () { panel.hidden = true; location.hash = "#quote"; }; w.appendChild(q);
      var h = el("button", null, "Hours and area"); h.type = "button"; h.onclick = function () { say("user", "What are your hours and service area?"); answer("hours"); }; w.appendChild(h);
      msgs.appendChild(w);
    }
    function canned(kind) {
      if (kind === "hours") {
        var hrs = (HO.schedule || []).join(", ") || "regular business hours";
        return "We're open " + hrs + (HO.emergency ? ", with a 24/7 emergency line" : "") + ". We serve " + (A.cities || [CITY]).join(", ") + ".";
      }
      return "Thanks for reaching out. For the fastest help, call " + (B.phone || "us") + " or send a quick quote request and we'll get right back to you.";
    }
    function answer(kind) {
      if (!CB.apiUrl || kind === "hours") { setTimeout(function () { say("bot", canned(kind)); }, 500); return; }
      var wait = say("bot", "Typing…"); wait.classList.add("msg--wait");
      fetch(CB.apiUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: hist }) })
        .then(function (r) { return r.json(); })
        .then(function (d) { wait.remove(); var t = d.reply || canned(); say("bot", t); hist.push({ role: "assistant", content: t }); })
        .catch(function () { wait.remove(); say("bot", canned()); });
    }
    $("#chatBubble").onclick = function () {
      panel.hidden = !panel.hidden;
      if (!panel.hidden && !started) { started = true; say("bot", fill(CB.greeting || "Hi! How can we help?")); chips(); }
      if (!panel.hidden) setTimeout(function () { input.focus(); }, 60);
    };
    $("#chatClose").onclick = function () { panel.hidden = true; };
    $("#chatForm").addEventListener("submit", function (e) {
      e.preventDefault(); var t = input.value.trim(); if (!t) return;
      input.value = ""; say("user", t); hist.push({ role: "user", content: t }); answer("msg");
    });
  }
})();
