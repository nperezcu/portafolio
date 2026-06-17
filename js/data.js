/* ============================================================================
   ARCHIVO DE CONTENIDO — EDITA SOLO ESTE ARCHIVO
   ----------------------------------------------------------------------------
   Todo lo que se muestra en la página sale de aquí. Para actualizar tu
   portafolio (nuevos proyectos, skills, experiencia) no necesitas tocar
   index.html ni main.js: edita los textos de abajo y recarga la página.

   Consejos:
   - Mantén las comillas y las comas tal como están.
   - Para agregar un proyecto, copia un bloque { ... } de PROYECTOS y pégalo
     debajo, separado por coma.
   - Las imágenes van en la carpeta assets/ (usa rutas tipo "assets/foto.png").
   ========================================================================== */

const DATOS = {

  /* ── Identidad ─────────────────────────────────────────────────────────── */
  nombre: "Nicolás",
  iniciales: "N", // se muestra en el logo y el avatar
  titulo: "Científico de Datos",
  // Frases que se escriben solas en el hero (efecto máquina de escribir)
  frases: [
    "Científico de Datos",
    "Estadístico · Universidad Nacional de Colombia",
    "Machine Learning aplicado a finanzas",
    "De datos crudos a decisiones",
  ],
  resumen:
    "Estudiante de Estadística de la Universidad Nacional de Colombia. " +
    "Construyo pipelines de datos reproducibles y modelos de machine learning " +
    "explicables, con énfasis en riesgo financiero y banca. Me interesa el " +
    "análisis honesto: validar los datos antes que las métricas.",

  ubicacion: "Bogotá, Colombia",
  email: "nitro16k@gmail.com",

  /* ── Redes (deja "" para ocultar una red) ──────────────────────────────── */
  redes: {
    github: "https://github.com/TU_USUARIO",      // ← cambia TU_USUARIO
    linkedin: "https://www.linkedin.com/in/TU_USUARIO",
    kaggle: "",                                    // ej: "https://www.kaggle.com/usuario"
    twitter: "",
  },

  /* ── CV: pon tu PDF en assets/cv.pdf y este botón funcionará ───────────── */
  cv: "assets/cv.pdf",

  /* ── Sobre mí (sección "Perfil") ───────────────────────────────────────── */
  sobreMi: [
    "Soy estudiante de Estadística en la Universidad Nacional de Colombia, " +
    "enfocado en ciencia de datos aplicada al sector financiero. Trabajo el " +
    "ciclo completo: ingesta y limpieza de datos públicos, ingeniería de " +
    "features, modelado con validación temporal estricta y explicabilidad " +
    "con SHAP.",

    "Mi proyecto insignia audita y modela el riesgo de deterioro de cartera " +
    "del sistema bancario colombiano con datos de la Superintendencia " +
    "Financiera: 106 archivos mensuales consolidados en un panel de 30 bancos " +
    "(2015–2023), clustering de entidades y un pipeline de ML donde el " +
    "hallazgo central fue metodológico — detectar y corregir fugas de " +
    "información y defectos de construcción del target que inflaban las métricas.",

    "Creo en los resultados reproducibles y honestos: un R² negativo bien " +
    "diagnosticado vale más que una métrica inflada por leakage.",
  ],

  /* ── Datos rápidos (tarjetas bajo el perfil) ───────────────────────────── */
  datosRapidos: [
    { numero: "2,700+", texto: "observaciones banco-mes procesadas" },
    { numero: "106", texto: "archivos SFC consolidados en un pipeline" },
    { numero: "30", texto: "bancos analizados (2015–2023)" },
    { numero: "4", texto: "notebooks reproducibles de punta a punta" },
  ],

  /* ── Habilidades ───────────────────────────────────────────────────────── */
  habilidades: [
    {
      categoria: "Lenguajes & Datos",
      items: ["Python", "R", "SQL", "Pandas", "NumPy", "PyArrow / Parquet"],
    },
    {
      categoria: "Machine Learning",
      items: ["scikit-learn", "XGBoost", "LightGBM", "SHAP", "K-Means / PCA", "Validación temporal"],
    },
    {
      categoria: "Visualización & Apps",
      items: ["Matplotlib", "Seaborn", "Streamlit", "Power BI", "HTML / CSS / JS"],
    },
    {
      categoria: "Estadística",
      items: ["Inferencia", "Series de tiempo", "Diseño muestral", "Modelos lineales"],
    },
    {
      categoria: "Herramientas",
      items: ["Git / GitHub", "Jupyter", "VS Code", "Excel avanzado"],
    },
  ],

  /* ── Proyectos ─────────────────────────────────────────────────────────── */
  /* tags: se usan para los filtros. imagen: archivo dentro de assets/.      */
  proyectos: [
    {
      titulo: "Riesgo de deterioro crediticio — Banca colombiana",
      descripcion:
        "Pipeline completo con datos públicos de la Superfinanciera: consolidación " +
        "de 106 archivos NIIF, panel de 30 bancos (2015–2023), clustering K-Means " +
        "sin leakage, XGBoost con split temporal purgado y explicabilidad SHAP. " +
        "Incluye dashboard Streamlit y una auditoría que detectó y corrigió " +
        "defectos de construcción del target que inflaban el R².",
      imagen: "assets/proyecto_riesgo.png",
      tags: ["Machine Learning", "Finanzas", "Python"],
      tecnologias: ["Python", "XGBoost", "SHAP", "Streamlit", "Parquet"],
      repo: "https://github.com/TU_USUARIO/riesgo-cartera-colombia",
      demo: "", // ej: enlace a Streamlit Cloud si lo despliegas
      destacado: true,
    },
    {
      titulo: "Explicabilidad de modelos con SHAP",
      descripcion:
        "Análisis de qué variables mueven las predicciones de un modelo de riesgo: " +
        "importancias globales, beeswarm de dirección e intensidad, y waterfalls " +
        "individuales por banco — la narrativa que un regulador exigiría.",
      imagen: "assets/proyecto_shap.png",
      tags: ["Machine Learning", "Explicabilidad"],
      tecnologias: ["Python", "SHAP", "XGBoost"],
      repo: "https://github.com/TU_USUARIO/riesgo-cartera-colombia",
      demo: "",
      destacado: false,
    },
    {
      titulo: "EDA del sistema bancario colombiano",
      descripcion:
        "Análisis exploratorio del NPL del sistema 2015–2023: series por banco, " +
        "choque COVID, correlaciones entre ratios financieros y detección de " +
        "outliers con interpretación económica (microcrédito vs banca comercial).",
      imagen: "assets/proyecto_npl.png",
      tags: ["EDA", "Finanzas", "Python"],
      tecnologias: ["Pandas", "Matplotlib", "Seaborn"],
      repo: "https://github.com/TU_USUARIO/riesgo-cartera-colombia",
      demo: "",
      destacado: false,
    },
    /* ← Agrega aquí tu próximo proyecto copiando un bloque { ... } */
  ],

  /* ── Experiencia (línea de tiempo) ─────────────────────────────────────── */
  experiencia: [
    {
      periodo: "2025 — Presente",
      cargo: "Proyectos de ciencia de datos (portafolio)",
      lugar: "Independiente",
      descripcion:
        "Desarrollo de proyectos end-to-end con datos públicos: riesgo de " +
        "crédito bancario, dashboards interactivos y pipelines reproducibles.",
    },
    /* ← Agrega aquí prácticas, monitorías o trabajos */
  ],

  /* ── Educación ─────────────────────────────────────────────────────────── */
  educacion: [
    {
      periodo: "En curso",
      titulo: "Pregrado en Estadística",
      lugar: "Universidad Nacional de Colombia — Bogotá",
      descripcion:
        "Énfasis en inferencia, series de tiempo y aprendizaje estadístico.",
    },
    /* ← Agrega aquí cursos y certificaciones (Coursera, DataCamp, etc.) */
  ],

  /* ── Pie de página ─────────────────────────────────────────────────────── */
  footer: "Hecho con HTML, CSS y JavaScript puro — sin frameworks, fácil de mantener.",
};
