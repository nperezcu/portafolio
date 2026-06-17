/* ============================================================================
   LÓGICA DE LA PÁGINA — normalmente NO necesitas editar este archivo.
   Lee el objeto DATOS (js/data.js) y pinta cada sección. Las interacciones:
   tema claro/oscuro, menú móvil, efecto de escritura, filtros de proyectos,
   animaciones al hacer scroll y botón "volver arriba".
   ========================================================================== */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  /* ── Utilidad: crear elemento con clase y contenido ──────────────────── */
  function el(tag, clase, html) {
    const e = document.createElement(tag);
    if (clase) e.className = clase;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function escapar(t) {
    const d = document.createElement("div");
    d.textContent = t;
    return d.innerHTML;
  }

  /* ════════ 1. Identidad / hero ════════ */
  document.title = `${DATOS.nombre} · ${DATOS.titulo}`;
  $("#logo-iniciales").textContent = DATOS.iniciales;
  $("#logo-nombre").textContent = DATOS.nombre.toLowerCase() + ".dev";
  $("#hero-nombre").textContent = DATOS.nombre + ".";
  $("#hero-resumen").textContent = DATOS.resumen;
  $("#avatar").textContent = DATOS.iniciales;
  $("#ubicacion").textContent = "📍 " + DATOS.ubicacion;
  $("#footer-texto").textContent = DATOS.footer;
  $("#footer-nombre").textContent = DATOS.nombre;
  $("#anio").textContent = new Date().getFullYear();

  // Botones de correo y CV
  $("#btn-email").href = "mailto:" + DATOS.email;
  const btnCv = $("#btn-cv");
  if (DATOS.cv) { btnCv.href = DATOS.cv; } else { btnCv.style.display = "none"; }

  /* ── Redes sociales (hero + contacto) ─────────────────────────────────── */
  const ICONOS_RED = { github: "GH", linkedin: "in", kaggle: "K", twitter: "X" };
  function pintarRedes(contenedor) {
    Object.entries(DATOS.redes).forEach(([red, url]) => {
      if (!url) return;
      const a = el("a", null, ICONOS_RED[red] || red[0].toUpperCase());
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.title = red;
      contenedor.appendChild(a);
    });
    const mail = el("a", null, "@");
    mail.href = "mailto:" + DATOS.email;
    mail.title = "Email";
    contenedor.appendChild(mail);
  }
  pintarRedes($("#hero-redes"));
  pintarRedes($("#contacto-redes"));

  /* ════════ 2. Efecto máquina de escribir ════════ */
  (function escribir() {
    const destino = $("#typed");
    let iFrase = 0, iChar = 0, borrando = false;

    function tick() {
      const frase = DATOS.frases[iFrase];
      destino.textContent = frase.slice(0, iChar);

      let espera = borrando ? 35 : 75;
      if (!borrando && iChar === frase.length) { borrando = true; espera = 2100; }
      else if (borrando && iChar === 0) {
        borrando = false;
        iFrase = (iFrase + 1) % DATOS.frases.length;
        espera = 350;
      } else {
        iChar += borrando ? -1 : 1;
      }
      setTimeout(tick, espera);
    }
    tick();
  })();

  /* ════════ 3. Perfil ════════ */
  const sobreMi = $("#sobre-mi");
  DATOS.sobreMi.forEach((p) => sobreMi.appendChild(el("p", null, escapar(p))));

  const stats = $("#datos-rapidos");
  DATOS.datosRapidos.forEach((d) => {
    const card = el("div", "stat-card reveal");
    card.appendChild(el("div", "stat-num", escapar(d.numero)));
    card.appendChild(el("div", "stat-texto", escapar(d.texto)));
    stats.appendChild(card);
  });

  /* ════════ 4. Habilidades ════════ */
  const skills = $("#skills");
  DATOS.habilidades.forEach((grupo) => {
    const card = el("div", "skill-card reveal");
    card.appendChild(el("h3", null, escapar(grupo.categoria)));
    const chips = el("div", "chips");
    grupo.items.forEach((s) => chips.appendChild(el("span", "chip", escapar(s))));
    card.appendChild(chips);
    skills.appendChild(card);
  });

  /* ════════ 5. Proyectos + filtros ════════ */
  const grid = $("#lista-proyectos");

  DATOS.proyectos.forEach((p) => {
    const card = el("article", "proyecto-card reveal");
    card.dataset.tags = p.tags.join("|");

    if (p.imagen) {
      const fig = el("div", "proyecto-img");
      const img = el("img");
      img.src = p.imagen;
      img.alt = p.titulo;
      img.loading = "lazy";
      fig.appendChild(img);
      card.appendChild(fig);
    }

    const body = el("div", "proyecto-body");
    const titulo = el("h3", "proyecto-titulo", escapar(p.titulo));
    if (p.destacado) titulo.appendChild(el("span", "badge-destacado", "DESTACADO"));
    body.appendChild(titulo);
    body.appendChild(el("p", "proyecto-desc", escapar(p.descripcion)));

    const tecs = el("div", "proyecto-tecs");
    p.tecnologias.forEach((t) => tecs.appendChild(el("span", null, escapar(t))));
    body.appendChild(tecs);

    const links = el("div", "proyecto-links");
    if (p.repo) links.innerHTML += `<a href="${p.repo}" target="_blank" rel="noopener">Código →</a>`;
    if (p.demo) links.innerHTML += `<a href="${p.demo}" target="_blank" rel="noopener">Demo →</a>`;
    if (p.repo || p.demo) body.appendChild(links);

    card.appendChild(body);
    grid.appendChild(card);
  });

  // Filtros: "Todos" + cada tag único
  const filtros = $("#filtros");
  const tags = ["Todos", ...new Set(DATOS.proyectos.flatMap((p) => p.tags))];
  tags.forEach((tag, i) => {
    const btn = el("button", "filtro-btn" + (i === 0 ? " activo" : ""), escapar(tag));
    btn.addEventListener("click", () => {
      filtros.querySelectorAll(".filtro-btn").forEach((b) => b.classList.remove("activo"));
      btn.classList.add("activo");
      grid.querySelectorAll(".proyecto-card").forEach((card) => {
        const visible = tag === "Todos" || card.dataset.tags.split("|").includes(tag);
        card.classList.toggle("oculto", !visible);
      });
    });
    filtros.appendChild(btn);
  });

  /* ════════ 6. Trayectoria ════════ */
  function pintarTimeline(contenedor, items, campoTitulo) {
    items.forEach((it) => {
      const item = el("div", "timeline-item");
      item.appendChild(el("div", "timeline-periodo", escapar(it.periodo)));
      item.appendChild(el("div", "timeline-cargo", escapar(it[campoTitulo])));
      item.appendChild(el("div", "timeline-lugar", escapar(it.lugar)));
      if (it.descripcion) item.appendChild(el("p", "timeline-desc", escapar(it.descripcion)));
      contenedor.appendChild(item);
    });
  }
  pintarTimeline($("#experiencia"), DATOS.experiencia, "cargo");
  pintarTimeline($("#educacion"), DATOS.educacion, "titulo");

  /* ════════ 7. Tema claro / oscuro (persistente) ════════ */
  const root = document.documentElement;
  const btnTema = $("#theme-toggle");

  function aplicarTema(tema) {
    if (tema === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    btnTema.textContent = tema === "light" ? "☀️" : "🌙";
    localStorage.setItem("tema", tema);
  }
  aplicarTema(localStorage.getItem("tema") || "dark");
  btnTema.addEventListener("click", () =>
    aplicarTema(root.getAttribute("data-theme") === "light" ? "dark" : "light")
  );

  /* ════════ 8. Menú móvil ════════ */
  const navLinks = $("#nav-links");
  $("#menu-toggle").addEventListener("click", () => navLinks.classList.toggle("abierto"));
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") navLinks.classList.remove("abierto");
  });

  /* ════════ 9. Scroll: navbar, volver-arriba, link activo, reveal ════════ */
  const navbar = $("#navbar");
  const volver = $("#volver-arriba");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
    volver.classList.toggle("visible", window.scrollY > 600);
  }, { passive: true });

  volver.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Resaltar en el menú la sección visible
  const secciones = document.querySelectorAll("section[id]");
  const linksMenu = navLinks.querySelectorAll("a");
  const obsSecciones = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (!en.isIntersecting) return;
      linksMenu.forEach((a) =>
        a.classList.toggle("activo", a.getAttribute("href") === "#" + en.target.id)
      );
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  secciones.forEach((s) => obsSecciones.observe(s));

  // Aparición progresiva de elementos .reveal
  const obsReveal = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        obsReveal.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((e) => obsReveal.observe(e));
})();
