// Điền link repo vào đây để hiện nút GitHub trên thanh trên. Để trống thì nút ẩn.
const REPO_URL = "https://github.com/Ga-Mo221/My-Tool";

const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const svgEl = (tag, attrs, parent, text) => {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  if (text != null) el.textContent = text;
  if (parent) parent.appendChild(el);
  return el;
};

if (REPO_URL) {
  document.querySelectorAll("[data-repo]").forEach((a) => { a.href = REPO_URL; a.hidden = false; });
}

// ── Demo MoveDirection: bàn phím, joystick ảo, tay cầm ──────────────
(function moveDemo() {
  const stage = $("moveStage"), player = $("player"), joy = $("vjoy"), knob = $("vjoyKnob");
  const keys = {};
  let joyVec = null, pos = null, last = performance.now(), device = "KeyboardMouse";
  const MOVE_KEYS = { KeyW: 1, KeyA: 1, KeyS: 1, KeyD: 1 };

  stage.addEventListener("keydown", (e) => { if (MOVE_KEYS[e.code]) { keys[e.code] = true; e.preventDefault(); } });
  stage.addEventListener("keyup", (e) => { keys[e.code] = false; });
  stage.addEventListener("blur", () => { for (const k in keys) keys[k] = false; });
  stage.addEventListener("pointerdown", () => stage.focus({ preventScroll: true }));

  const setJoy = (e) => {
    const r = joy.getBoundingClientRect();
    let x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    let y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    const m = Math.hypot(x, y);
    if (m > 1) { x /= m; y /= m; }
    joyVec = { x, y: -y };
    knob.style.transform = `translate(${x * 30}px,${y * 30}px)`;
  };
  joy.addEventListener("pointerdown", (e) => { joy.setPointerCapture(e.pointerId); setJoy(e); });
  joy.addEventListener("pointermove", (e) => { if (joyVec) setJoy(e); });
  const endJoy = () => { joyVec = null; knob.style.transform = ""; };
  joy.addEventListener("pointerup", endJoy);
  joy.addEventListener("pointercancel", endJoy);

  const applyDeadzone = (x, y, dz) => {
    const m = Math.hypot(x, y);
    if (m < dz) return { x: 0, y: 0 };
    const s = Math.min(1, (m - dz) / (1 - dz)) / m;
    return { x: x * s, y: y * s };
  };

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    let v = { x: (keys.KeyD ? 1 : 0) - (keys.KeyA ? 1 : 0), y: (keys.KeyW ? 1 : 0) - (keys.KeyS ? 1 : 0) };
    if (v.x || v.y) {
      const m = Math.hypot(v.x, v.y);
      v = { x: v.x / m, y: v.y / m };
      device = "KeyboardMouse";
    }
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) {
      if (!p) continue;
      const g = applyDeadzone(p.axes[0] || 0, -(p.axes[1] || 0), 0.15);
      if (g.x || g.y) { v = g; device = "Gamepad"; break; }
    }
    if (joyVec) { v = joyVec; device = "Mobile"; }

    const r = stage.getBoundingClientRect();
    if (r.width) {
      if (!pos) pos = { x: r.width / 2, y: r.height / 2 };
      pos.x = clamp(pos.x + v.x * 170 * dt, 16, r.width - 16);
      pos.y = clamp(pos.y - v.y * 170 * dt, 16, r.height - 16);
      player.style.transform = `translate(${pos.x}px,${pos.y}px)`;
    }
    $("roMove").textContent = `(${v.x.toFixed(2)}, ${v.y.toFixed(2)})`;
    $("roDevice").textContent = device;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

// ── Demo TISDirectionalSkillButton, chế độ DragRelease ──────────────
(function skillDemo() {
  const stage = $("skillStage"), btn = $("skillBtn"), line = $("skillLine"), cancel = $("skillCancel");
  const DRAG_THRESHOLD = 20, QUICK_TAP = 0.2, RANGE = 110;
  let start = null, dir = null, startT = 0, inCancel = false;

  const center = () => {
    const s = stage.getBoundingClientRect(), b = btn.getBoundingClientRect();
    return { x: b.left + b.width / 2, y: b.top + b.height / 2, sx: s.left, sy: s.top };
  };
  const log = (t) => { $("skillLog").textContent = t; };
  const reset = () => {
    stage.classList.remove("drag");
    cancel.classList.remove("over");
    btn.style.transform = "";
    line.setAttribute("x1", 0); line.setAttribute("y1", 0); line.setAttribute("x2", 0); line.setAttribute("y2", 0);
    start = null;
  };

  btn.addEventListener("pointerdown", (e) => {
    btn.setPointerCapture(e.pointerId);
    start = center();
    startT = performance.now();
    dir = { x: 0, y: 0, m: 0 };
    stage.classList.add("drag");
  });
  btn.addEventListener("pointermove", (e) => {
    if (!start) return;
    let x = e.clientX - start.x, y = e.clientY - start.y;
    const m = Math.hypot(x, y);
    const c = Math.min(m, RANGE), nx = m ? x / m : 0, ny = m ? y / m : 0;
    dir = { x: nx, y: ny, m };
    btn.style.transform = `translate(${nx * Math.min(m, 34)}px,${ny * Math.min(m, 34)}px)`;
    const cx = start.x - start.sx, cy = start.y - start.sy;
    line.setAttribute("x1", cx); line.setAttribute("y1", cy);
    line.setAttribute("x2", cx + nx * c); line.setAttribute("y2", cy + ny * c);
    const r = cancel.getBoundingClientRect();
    inCancel = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    cancel.classList.toggle("over", inCancel);
  });
  const release = () => {
    if (!start) return;
    const held = (performance.now() - startT) / 1000;
    if (inCancel) log("Hủy: nhả trong Cancel Zone");
    else if (dir.m >= DRAG_THRESHOLD) log(`OnDirectionCast("Skill", (${dir.x.toFixed(2)}, ${(-dir.y).toFixed(2)}))`);
    else if (held <= QUICK_TAP) log('OnDirectionCast("Skill", Vector2.zero)  // tap nhanh');
    else log("Không cast: kéo chưa đủ xa và giữ quá lâu");
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 140);
    inCancel = false;
    reset();
  };
  btn.addEventListener("pointerup", release);
  btn.addEventListener("pointercancel", reset);
})();

// ── Demo G/R/S ──────────────────────────────────────────────────────
(function grsDemo() {
  const stage = $("grsStage"), box = $("grsBox"), hud = $("grsHud");
  const ax = stage.querySelector(".grs-axis.x"), ay = stage.querySelector(".grs-axis.y");
  const NAMES = { G: "Move", R: "Rotate", S: "Scale" };
  const PRECISION = 0.2;
  const state = { x: 0, y: 0, rot: 0, scale: 1 };
  let s = null, mouse = { x: 0, y: 0 }, shift = false, ready = false;

  const draw = (o) => {
    box.style.transform = `translate(${o.x}px,${o.y}px) rotate(${o.rot}deg) scale(${o.scale})`;
  };
  const init = () => {
    const r = stage.getBoundingClientRect();
    if (!r.width || ready) return;
    state.x = r.width / 2; state.y = r.height / 2 - 14; ready = true;
    draw(state);
  };
  init();
  addEventListener("resize", init);
  addEventListener("load", init);

  const preview = () => {
    const dx0 = mouse.x - s.mx, dy0 = mouse.y - s.my;
    const k = shift ? PRECISION : 1;
    s.ax += (dx0 - s.lx) * k; s.ay += (dy0 - s.ly) * k;
    s.lx = dx0; s.ly = dy0;
    const o = { ...state };
    const num = s.num !== "" && !isNaN(parseFloat(s.num)) ? parseFloat(s.num) : null;
    let label = "";
    if (s.mode === "G") {
      let dx = s.axis === "Y" ? 0 : s.ax, dy = s.axis === "X" ? 0 : s.ay;
      if (num !== null) { dx = s.axis === "Y" ? 0 : num * 40; dy = s.axis === "Y" ? -num * 40 : 0; }
      o.x += dx; o.y += dy;
      label = `${(dx / 40).toFixed(2)}, ${(-dy / 40).toFixed(2)}`;
    } else if (s.mode === "R") {
      const a = num !== null ? num : s.ax * 0.6;
      o.rot += a; label = `${a.toFixed(1)}°`;
    } else {
      const f = num !== null ? num : Math.max(0.05, 1 + s.ax / 120);
      o.scale *= f; label = `× ${f.toFixed(2)}`;
    }
    s.result = o;
    draw(o);
    ax.classList.toggle("show", s.axis === "X");
    ay.classList.toggle("show", s.axis === "Y");
    ax.style.top = o.y + "px"; ay.style.left = o.x + "px";
    hud.textContent = `${NAMES[s.mode]}${s.axis ? " · trục " + s.axis : ""}${shift ? " · Precision" : ""}${s.num ? " · nhập " + s.num : ""}: ${label}`;
  };
  const end = (ok) => {
    if (!s) return;
    if (ok) Object.assign(state, s.result);
    hud.textContent = ok ? "Đã xác nhận. Nhấn G, R hoặc S để làm tiếp" : "Đã hủy, khối trở về vị trí cũ";
    s = null;
    draw(state);
    ax.classList.remove("show"); ay.classList.remove("show");
  };

  stage.addEventListener("pointermove", (e) => {
    const r = stage.getBoundingClientRect();
    mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    shift = e.shiftKey;
    if (s) preview();
  });
  stage.addEventListener("pointerdown", (e) => {
    stage.focus({ preventScroll: true });
    if (!s) { hud.textContent = "Nhấn G, R hoặc S rồi rê chuột"; return; }
    end(e.button === 0);
  });
  stage.addEventListener("contextmenu", (e) => e.preventDefault());
  stage.addEventListener("blur", () => end(false));
  stage.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key.toUpperCase();
    if (!s) {
      if (NAMES[k]) {
        init();
        s = { mode: k, mx: mouse.x, my: mouse.y, lx: 0, ly: 0, ax: 0, ay: 0, axis: "", num: "", result: { ...state } };
        preview();
        e.preventDefault();
      }
      return;
    }
    if (k === "ENTER") end(true);
    else if (k === "ESCAPE") end(false);
    else if (k === "X" || k === "Y") { s.axis = s.axis === k ? "" : k; preview(); }
    else if (/^[0-9.\-]$/.test(e.key)) { s.num += e.key; preview(); }
    else if (k === "BACKSPACE") { s.num = s.num.slice(0, -1); preview(); }
    else if (k === "SHIFT") { shift = true; preview(); return; }
    else return;
    e.preventDefault();
  });
  stage.addEventListener("keyup", (e) => { if (e.key === "Shift") { shift = false; if (s) preview(); } });
})();

// ── Demo pie menu: nhãn, góc và màu lấy từ code của package ─────────
(function pieDemo() {
  const LOCAL = "#4fb3a0", WORLD = "#e0914a";
  const MENUS = {
    create: {
      desc: "Mặc định <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd>. Đang chọn một object thì object mới thành con của nó, không chọn gì thì nằm ở gốc.",
      center: "TẠO",
      items: [
        ["Cube", "3D", 0, "#e89942"], ["Sphere", "3D", 45, "#4db0e8"], ["Capsule", "3D", 90, "#8cd973"],
        ["Cylinder", "3D", 135, "#bf73d9"], ["Plane", "3D", 180, "#59bfa6"], ["Quad", "3D", -135, "#d9598c"],
        ["Text", "TMP 3D", -90, "#f2d940"], ["Empty", "Object", -45, "#b8b8b8"],
      ],
      result: (i) => `Tạo ${i[0]}`,
    },
    view: {
      desc: "Mặc định <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Q</kbd>. Xoay Scene view về trục, có tùy chọn chuyển Orthographic. Ô LOCAL bật chế độ xem riêng object.",
      center: "VIEW",
      items: [
        ["+X", "FRONT", 0, "#e85442"], ["LOCAL", "VIEW", 45, "#d9a621"], ["-Y", "BTM", 90, "#36853d"],
        ["-Z", "LEFT", 180, "#146bb5"], ["+Z", "RIGHT", -135, "#1a87e8"], ["+Y", "TOP", -90, "#4db04f"],
        ["-X", "BACK", -45, "#bf422e"],
      ],
      result: (i) => `Nhìn từ ${i[1]}`,
    },
    copy: {
      desc: "Mặc định <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>C</kbd>. Chép từng giá trị hoặc cả ba, theo Local hay World, rồi dán sang object khác.",
      center: "COPY",
      items: [
        ["Position", "LOCAL", -135, LOCAL], ["Rotation", "LOCAL", 180, LOCAL], ["Scale", "LOCAL", 135, LOCAL],
        ["Local", "ALL 3", -90, LOCAL], ["Position", "WORLD", -45, WORLD], ["Rotation", "WORLD", 0, WORLD],
        ["Scale", "WORLD", 45, WORLD], ["World", "ALL 3", 90, WORLD],
      ],
      result: (i) => `Đã chép ${i[0]} (${i[1]})`,
    },
  };
  const svg = $("pie"), DEAD = 28, R = 128;
  let menu = MENUS.create, nodes = [], hovered = -1, res;

  function build(key) {
    menu = MENUS[key];
    svg.textContent = "";
    $("pieDesc").innerHTML = menu.desc;
    svgEl("circle", { r: 182, class: "pie-back" }, svg);
    nodes = menu.items.map((it) => {
      const rad = it[2] * Math.PI / 180, x = Math.cos(rad) * R, y = Math.sin(rad) * R;
      svgEl("line", { x1: 0, y1: 0, x2: x, y2: y, class: "pie-spoke" }, svg);
      return { x, y, it };
    });
    nodes.forEach((n) => {
      const g = svgEl("g", { class: "pie-item", transform: `translate(${n.x} ${n.y})` }, svg);
      svgEl("circle", { r: 35, stroke: n.it[3] }, g);
      svgEl("text", { y: 0 }, g, n.it[0]);
      svgEl("text", { y: 14, class: "sub" }, g, n.it[1]);
      n.g = g;
    });
    svgEl("circle", { r: 26, class: "pie-c" }, svg);
    svgEl("text", { y: 4, class: "pie-ct" }, svg, menu.center);
    res = svgEl("text", { y: 196, class: "pie-res" }, svg, "");
    hovered = -1;
  }
  const point = (e) => {
    const r = svg.getBoundingClientRect();
    return { x: (e.clientX - r.left) / r.width * 400 - 200, y: (e.clientY - r.top) / r.height * 400 - 200 };
  };
  svg.addEventListener("pointermove", (e) => {
    const p = point(e), m = Math.hypot(p.x, p.y);
    let best = -1;
    if (m > DEAD) {
      const a = Math.atan2(p.y, p.x) * 180 / Math.PI;
      let min = 999;
      nodes.forEach((n, i) => {
        const d = Math.abs(((n.it[2] - a + 540) % 360) - 180);
        if (d < min) { min = d; best = i; }
      });
    }
    if (best === hovered) return;
    hovered = best;
    nodes.forEach((n, i) => n.g.classList.toggle("on", i === best));
    res.textContent = best >= 0 ? menu.result(nodes[best].it) : "";
  });
  svg.addEventListener("pointerleave", () => {
    hovered = -1;
    nodes.forEach((n) => n.g.classList.remove("on"));
    res.textContent = "";
  });

  document.querySelectorAll("#pieTabs button").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll("#pieTabs button").forEach((o) => o.setAttribute("aria-selected", o === b));
    build(b.dataset.pie);
  }));
  build("create");
})();

// ── Demo Damped Track Chain, chế độ HeadFirstOverflow ───────────────
(function chainDemo() {
  const svg = $("chain"), input = $("chainAngle");
  const BONES = [
    { name: "Hông", limit: 15, len: 62, w: 20 },
    { name: "Ngực", limit: 25, len: 58, w: 17 },
    { name: "Cổ", limit: 30, len: 38, w: 12 },
    { name: "Đầu", limit: 50, len: 44, w: 26 },
  ];
  const links = BONES.map(() => svgEl("line", { stroke: "#f08a24", "stroke-linecap": "round" }, svg));
  const labels = BONES.map(() => svgEl("text", { fill: "#c4c4c4", "font-size": 13 }, svg));
  const aim = svgEl("line", { stroke: "#ffb56b", "stroke-dasharray": "6 5", "stroke-width": 2 }, svg);
  const target = svgEl("circle", { r: 9, fill: "#ef6a5e" }, svg);

  function update() {
    const want = +input.value;
    $("chainOut").textContent = want + "°";
    let left = want;
    const parts = BONES.map(() => 0);
    for (let i = BONES.length - 1; i >= 0; i--) {
      const take = clamp(left, -BONES[i].limit, BONES[i].limit);
      parts[i] = take;
      left -= take;
    }
    let x = 0, y = 280, a = 0;
    BONES.forEach((b, i) => {
      a += parts[i];
      const rad = a * Math.PI / 180;
      const nx = x + Math.sin(rad) * b.len, ny = y - Math.cos(rad) * b.len;
      const l = links[i];
      l.setAttribute("x1", x); l.setAttribute("y1", y); l.setAttribute("x2", nx); l.setAttribute("y2", ny);
      l.setAttribute("stroke-width", b.w);
      l.setAttribute("opacity", Math.abs(parts[i]) >= b.limit ? 1 : 0.72);
      const t = labels[i], side = want >= 0 ? -1 : 1;
      t.setAttribute("x", (x + nx) / 2 + side * 66);
      t.setAttribute("y", (y + ny) / 2 + 4);
      t.setAttribute("text-anchor", "middle");
      t.textContent = `${b.name} ${Math.round(parts[i])}°`;
      x = nx; y = ny;
    });
    const rad = want * Math.PI / 180;
    const finalRad = a * Math.PI / 180;
    aim.setAttribute("x1", x); aim.setAttribute("y1", y);
    aim.setAttribute("x2", x + Math.sin(finalRad) * 150); aim.setAttribute("y2", y - Math.cos(finalRad) * 150);
    target.setAttribute("cx", x + Math.sin(rad) * 150);
    target.setAttribute("cy", y - Math.cos(rad) * 150);
  }
  input.addEventListener("input", update);
  update();
})();

// ── Waveform minh họa trong GM-Inspector ────────────────────────────
(function wave() {
  const w = $("wave");
  for (let i = 0; i < 100; i++) {
    const env = Math.sin(i / 100 * Math.PI) * (0.55 + 0.45 * Math.sin(i * 0.37));
    const h = Math.max(3, Math.abs(env) * 78 * (0.6 + 0.4 * Math.sin(i * 1.7) ** 2));
    const selected = i > 28 && i < 62;
    svgEl("rect", { x: i * 4, y: 45 - h / 2, width: 2.6, height: h, fill: selected ? "#ffb56b" : "#8a8a8a" }, w);
  }
})();
