(function () {
  // Enhanced teddy: shaded fur, curly tuft on top, pink ribbon bow, belly heart, blinking eyes
  const BEAR_SVG = `
<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg" id="bear" class="mood-happy">
  <defs>
    <radialGradient id="fur" cx="40%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#e2ad78"/><stop offset="100%" stop-color="#b97a4a"/>
    </radialGradient>
    <radialGradient id="furDark" cx="40%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#c88a58"/><stop offset="100%" stop-color="#9d6238"/>
    </radialGradient>
    <radialGradient id="muzzle" cx="50%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#fbe6c8"/><stop offset="100%" stop-color="#eec79c"/>
    </radialGradient>
    <linearGradient id="ribbon" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ff8fb8"/><stop offset="100%" stop-color="#ff4f93"/>
    </linearGradient>
  </defs>

  <!-- ground shadow -->
  <ellipse cx="100" cy="226" rx="70" ry="6" fill="#d6508233"/>

  <!-- feet -->
  <ellipse cx="70" cy="212" rx="27" ry="15" fill="url(#furDark)"/>
  <ellipse cx="130" cy="212" rx="27" ry="15" fill="url(#furDark)"/>
  <ellipse cx="70" cy="214" rx="15" ry="8" fill="#f5a9bf"/>
  <ellipse cx="130" cy="214" rx="15" ry="8" fill="#f5a9bf"/>

  <!-- body -->
  <ellipse cx="100" cy="168" rx="55" ry="51" fill="url(#fur)"/>
  <ellipse cx="100" cy="176" rx="35" ry="35" fill="url(#muzzle)"/>
  <!-- belly heart -->
  <path d="M100 194 C80 180 86 165 95 167 C98 168 100 171 100 172 C100 171 102 168 105 167 C114 165 120 180 100 194Z" fill="#ff8fb8"/>
  <path d="M91 172 Q93 169 96 170" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>

  <!-- ribbon bow-tie at the neck -->
  <path d="M100 128 L78 116 Q74 129 78 142 Z" fill="url(#ribbon)"/>
  <path d="M100 128 L122 116 Q126 129 122 142 Z" fill="url(#ribbon)"/>
  <circle cx="100" cy="128" r="7" fill="#d63a78"/>
  <circle cx="98" cy="126" r="2.2" fill="#ffb3d0"/>

  <!-- arms with paw pads -->
  <g id="armL" class="arm">
    <g transform="rotate(18 48 160)">
      <ellipse cx="48" cy="160" rx="14" ry="30" fill="url(#furDark)"/>
      <ellipse cx="48" cy="181" rx="7" ry="6" fill="#f5a9bf"/>
    </g>
  </g>
  <g id="armR" class="arm">
    <g transform="rotate(-18 152 160)">
      <ellipse cx="152" cy="160" rx="14" ry="30" fill="url(#furDark)"/>
      <ellipse cx="152" cy="181" rx="7" ry="6" fill="#f5a9bf"/>
    </g>
  </g>

  <!-- head -->
  <g id="bear-head">
    <!-- ears -->
    <circle cx="52" cy="46" r="22" fill="url(#furDark)"/><circle cx="52" cy="47" r="12" fill="#f5a9bf"/>
    <circle cx="148" cy="46" r="22" fill="url(#furDark)"/><circle cx="148" cy="47" r="12" fill="#f5a9bf"/>
    <!-- face -->
    <circle cx="100" cy="88" r="58" fill="url(#fur)"/>
    <!-- fluffy cheek tufts -->
    <path d="M44 96 q-8 4 -3 11 q6 -1 8 -6Z" fill="#c88a58"/>
    <path d="M156 96 q8 4 3 11 q-6 -1 -8 -6Z" fill="#c88a58"/>
    <!-- curly tuft on top (for the curly-haired girl 🌀) -->
    <g class="curl">
      <path d="M100 34 C94 20 112 14 114 26 C116 37 101 38 101 28 C101 24 107 23 107 27"
            fill="none" stroke="#8a5530" stroke-width="5" stroke-linecap="round"/>
      <path d="M90 36 C84 28 94 22 98 28" fill="none" stroke="#8a5530" stroke-width="4" stroke-linecap="round"/>
    </g>
    <!-- ribbon bow on the ear -->
    <g transform="rotate(-18 62 38)">
      <path d="M62 38 L42 26 Q38 38 42 50 Z" fill="url(#ribbon)"/>
      <path d="M62 38 L82 26 Q86 38 82 50 Z" fill="url(#ribbon)"/>
      <circle cx="62" cy="38" r="6.5" fill="#d63a78"/>
      <circle cx="60" cy="36" r="2" fill="#ffb3d0"/>
    </g>
    <!-- muzzle -->
    <ellipse cx="100" cy="106" rx="27" ry="21" fill="url(#muzzle)"/>
    <!-- blush -->
    <ellipse class="blush" cx="64" cy="102" rx="12" ry="7.5" fill="#ff8fb8"/>
    <ellipse class="blush" cx="136" cy="102" rx="12" ry="7.5" fill="#ff8fb8"/>
    <!-- eyes -->
    <g id="eyes">
      <g class="eye-open">
        <circle cx="76" cy="82" r="8" fill="#3b2418"/><circle cx="124" cy="82" r="8" fill="#3b2418"/>
        <circle cx="78.5" cy="79" r="3" fill="#fff"/><circle cx="126.5" cy="79" r="3" fill="#fff"/>
        <circle cx="73" cy="86" r="1.4" fill="#fff"/><circle cx="121" cy="86" r="1.4" fill="#fff"/>
      </g>
      <g class="eye-arc" fill="none" stroke="#3b2418" stroke-width="4" stroke-linecap="round">
        <path d="M68 85 Q76 73 84 85"/><path d="M116 85 Q124 73 132 85"/>
      </g>
      <g class="eye-heart" fill="#ff3d81">
        <path d="M76 91 C61 80 65 69 73 70 C75 70 76 72 76 74 C76 72 77 70 79 70 C87 69 91 80 76 91Z"/>
        <path d="M124 91 C109 80 113 69 121 70 C123 70 124 72 124 74 C124 72 125 70 127 70 C135 69 139 80 124 91Z"/>
      </g>
    </g>
    <g class="brows" fill="none" stroke="#3b2418" stroke-width="3.5" stroke-linecap="round">
      <path d="M66 68 L84 74"/><path d="M134 68 L116 74"/>
    </g>
    <path class="tear" d="M130 94 Q126 104 130 108 Q135 104 130 94Z" fill="#8fd3ff"/>
    <!-- nose -->
    <ellipse cx="100" cy="98" rx="9.5" ry="7" fill="#3b2418"/>
    <ellipse cx="97" cy="96" rx="3" ry="1.7" fill="#9b7a6a"/>
    <!-- mouths -->
    <path class="m-smile" d="M88 108 Q94 118 100 108 Q106 118 112 108" fill="none" stroke="#3b2418" stroke-width="3" stroke-linecap="round"/>
    <path class="m-big" d="M86 108 Q100 134 114 108 Z" fill="#7a2a2a" stroke="#3b2418" stroke-width="3" stroke-linejoin="round"/>
    <ellipse class="m-o" cx="100" cy="115" rx="6" ry="8" fill="#7a2a2a" stroke="#3b2418" stroke-width="2.5"/>
    <path class="m-sad" d="M88 118 Q100 106 112 118" fill="none" stroke="#3b2418" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>`;

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const moods = ["happy", "excited", "love", "shy", "surprised", "sad"];
  const pokeLines = [
    "Hehe, that tickles! 🤭", "Boop! 🐽", "Hey! Do it again 😆",
    "Teddy is blushing... 🥺", "I'm ticklish!! 😂", "You're so cute, you know that? 💗",
    "Stop it... or don't 😳", "Squishy hugs incoming 🤗"
  ];
  let pokeIdx = 0;
  let animTimer = null;

  const Bear = {
    wrap: null, inner: null, svg: null, bubble: null, baseMood: "happy",
    mount() {
      const wrap = document.querySelector(".bear-wrap");
      if (!wrap) return;
      wrap.innerHTML = `<div class="bear-inner">${BEAR_SVG}</div>`;
      this.wrap = wrap;
      this.inner = wrap.querySelector(".bear-inner");
      this.svg = wrap.querySelector("svg");
      this.bubble = document.querySelector(".bubble");
      this.head = wrap.querySelector("#bear-head");
      this.eyes = wrap.querySelector("#eyes");
    },
    mood(name) {
      if (!this.svg) return;
      moods.forEach((m) => this.svg.classList.remove("mood-" + m));
      this.svg.classList.add("mood-" + (name || "happy"));
    },
    // dx / dy in range -1..1 (left..right / up..down)
    look(dx, dy = 0) {
      if (!this.svg) return;
      this.eyes.style.transform = `translate(${dx * 6}px, ${dy * 4}px)`;
      this.head.style.transform = `rotate(${dx * 7}deg) translateX(${dx * 4}px)`;
    },
    say(text) {
      if (!this.bubble || !text) return;
      this.bubble.textContent = text;
      this.bubble.classList.remove("pop");
      void this.bubble.offsetWidth;
      this.bubble.classList.add("pop");
    },
    jump() {
      if (!this.wrap) return;
      this.wrap.classList.remove("jump");
      void this.wrap.offsetWidth;
      this.wrap.classList.add("jump");
    },
    wave() {
      if (!this.wrap) return;
      this.wrap.classList.remove("wave");
      void this.wrap.offsetWidth;
      this.wrap.classList.add("wave");
    },
    // playful one-shot animations: wiggle | spin | boing
    anim(name) {
      if (!this.inner || !name) return;
      ["a-wiggle", "a-spin", "a-boing"].forEach((c) => this.inner.classList.remove(c));
      void this.inner.offsetWidth;
      this.inner.classList.add("a-" + name);
      clearTimeout(animTimer);
      animTimer = setTimeout(() => this.inner.classList.remove("a-" + name), 1000);
    },
    // where is this element relative to the bear? -1 (far left) .. 1 (far right)
    dirTo(el) {
      const b = this.wrap.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const dx = (r.left + r.width / 2) - (b.left + b.width / 2);
      const dy = (r.top + r.height / 2) - (b.top + b.height / 2);
      return { dx: clamp(dx / 250, -1, 1), dy: clamp(dy / 250, -1, 1) };
    },
  };
  window.Bear = Bear;

  // fill in names from config
  function fillNames() {
    const s = window.SITE || {};
    document.querySelectorAll(".her-name").forEach((e) => (e.textContent = s.herName || "My Love"));
    document.querySelectorAll(".your-name").forEach((e) => (e.textContent = s.yourName || "Me"));
    document.querySelectorAll(".date-plan").forEach((e) => (e.textContent = s.datePlan || ""));
  }

  // floating bears, ribbons and hearts in the background
  function floaties() {
    const icons = ["🧸", "🎀", "💖", "🧸", "🎀", "💗", "💕", "🎀"];
    for (let i = 0; i < 16; i++) {
      const s = document.createElement("span");
      s.className = "floaty";
      s.textContent = icons[i % icons.length];
      s.style.left = Math.random() * 100 + "vw";
      s.style.fontSize = 16 + Math.random() * 26 + "px";
      s.style.animationDuration = 9 + Math.random() * 12 + "s";
      s.style.animationDelay = -Math.random() * 18 + "s";
      document.body.appendChild(s);
    }
  }

  window.confetti = function (n = 60) {
    const icons = ["💖", "💗", "🎀", "💕", "✨", "🧸", "🎀"];
    for (let i = 0; i < n; i++) {
      const c = document.createElement("span");
      c.className = "confetti";
      c.textContent = icons[Math.floor(Math.random() * icons.length)];
      c.style.left = Math.random() * 100 + "vw";
      c.style.fontSize = 18 + Math.random() * 22 + "px";
      c.style.animationDuration = 2.5 + Math.random() * 3 + "s";
      c.style.animationDelay = Math.random() * 1.2 + "s";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 8000);
    }
  };
  window.clearConfetti = function () {
    document.querySelectorAll(".confetti").forEach((c) => c.remove());
  };

  let navigating = false;
  function go(href, delay) {
    if (navigating) return;
    navigating = true;
    setTimeout(() => (window.location.href = href), delay);
  }

  function wireButtons() {
    const buttons = document.querySelectorAll(".btn-row .btn");
    buttons.forEach((btn) => {
      const mood = btn.dataset.mood || "happy";
      const hoverSay = btn.dataset.hover;

      const enter = () => {
        if (btn.classList.contains("locked")) return;
        const d = Bear.dirTo(btn);
        Bear.look(d.dx, d.dy);          // bear looks toward the button (left → right)
        Bear.mood(mood);
        if (hoverSay) Bear.say(hoverSay);
      };
      btn.addEventListener("mouseenter", enter);
      btn.addEventListener("focus", enter);
      btn.addEventListener("touchstart", enter, { passive: true });
      const leave = () => { Bear.look(0, 0); Bear.mood(Bear.baseMood || "happy"); };
      btn.addEventListener("mouseleave", leave);
      btn.addEventListener("blur", leave);

      btn.addEventListener("click", (e) => {
        if (btn.dataset.say) Bear.say(btn.dataset.say);
        Bear.mood(mood);
        Bear.jump();
        if (btn.dataset.anim) Bear.anim(btn.dataset.anim);
        if (btn.dataset.wave) Bear.wave();
        if (btn.dataset.confetti) window.confetti(40);
        const href = btn.getAttribute("href");
        // "instant" links are left alone so the browser follows them natively
        if (href && !btn.dataset.stay && !btn.dataset.instant) {
          e.preventDefault();               // let the bear react first, then go
          go(href, 750);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    Bear.mount();
    fillNames();
    floaties();
    wireButtons();

    // poke / tickle the bear 🧸
    if (Bear.wrap) {
      Bear.wrap.addEventListener("click", () => {
        Bear.say(pokeLines[pokeIdx++ % pokeLines.length]);
        Bear.mood("excited");
        Bear.anim(pokeIdx % 2 ? "boing" : "wiggle");
        setTimeout(() => Bear.mood(Bear.baseMood || "happy"), 900);
      });
    }

    // the eyes also gently follow the cursor when not hovering a button
    document.addEventListener("mousemove", (e) => {
      if (!Bear.wrap || document.querySelector(".btn:hover")) return;
      const r = Bear.wrap.getBoundingClientRect();
      const dx = clamp((e.clientX - (r.left + r.width / 2)) / 400, -1, 1);
      const dy = clamp((e.clientY - (r.top + r.height / 2)) / 400, -1, 1);
      Bear.look(dx * 0.7, dy * 0.7);
    });

    if (document.body.dataset.mood) { Bear.baseMood = document.body.dataset.mood; Bear.mood(Bear.baseMood); }
    if (document.body.dataset.startWave) setTimeout(() => Bear.wave(), 400);
    if (document.body.dataset.bounce) Bear.inner.classList.add("bounce");
    if (document.body.dataset.confetti) window.confetti(90);
  });
})();
