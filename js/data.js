
const DATOS = {

  /* ── Identidad ─────────────────────────────────────────────────────────── */
  nombre: "Nicolás",
  iniciales: "NP", // se muestra en el logo y el avatar
  titulo: "Científico de Datos",
  // Frases que se escriben solas en el hero (efecto máquina de escribir)
  frases: [
    "Ciencia de Datos",
    "Estadística · UNAL",
    "Machine Learning",
    "Análisis de datos",
  ],
  resumen:
    "Estadístico de la Universidad Nacional de Colombia. " +
    "Construyo pipelines de datos reproducibles y modelos de machine learning " +
    "explicables, con proyectos en riesgo financiero, análisis espacial y un sólido " +
    "conocimiento técnico. Ayudo a tomar decisiones basadas en datos con " +
    "soluciones analíticas transparentes y libres de fugas de información.",
  ubicacion: "Medellín, Colombia",
  email: "nperezcu@unal.edu.co",

  /* ── Redes (deja "" para ocultar una red) ──────────────────────────────── */
  redes: {
    github: "https://github.com/nperezcu",    
    linkedin: "https://www.linkedin.com/in/npererezcu/"
  },

  /* ── CV: pon tu PDF en assets/cv.pdf y este botón funcionará ───────────── */
  cv: "assets/cv.pdf",

  /* ── Sobre mí (sección "Perfil") ───────────────────────────────────────── */
  sobreMi: [
    "Estadístico - Universidad Nacional de Colombia, " +
    "enfocado en ciencia y análisis de datos para generar impacto de negocio. " +
    "Transformo datos complejos en decisiones estratégicas dominando el ciclo completo: " +
    "desde la ingesta, automatización, limpieza y exploracion hasta el modelado de Machine Learning. "+
    "Tengo experiencia comprobable resolviendo problemas reales: desde estructurar +10.000 datos no estructurados " +
    "para optimizar la logística de un servicio de ambulancias, hasta construir pipelines financieros con SQL, Python y Power BI " +
    "que reducen tiempos operativos de horas a minutos.",

    "Mi proyecto insignia audita y modela el riesgo de deterioro de cartera " +
    "del sistema bancario colombiano con datos reales de la Superintendencia " +
    "Financiera: 106 archivos mensuales consolidados en un panel de 30 bancos " +
    "(2015–2023), clustering de entidades y un pipeline de ML donde el " +
    "hallazgo central fue metodológico — detectar y corregir fugas de " +
    "información y defectos de construcción del target que inflaban las métricas.",

    "Combino dominio teórico gracias a mi formación en estadística con el técnico y estricto rigor metodológico. " +
    "Mi objetivo es entregar soluciones analíticas transparentes, explicables y libres de fugas de información, " +
    "garantizando que cada modelo se traduzca en eficiencia y rentabilidad para la empresa o proyecto."
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
      items: ["Inferencia", "Series de tiempo", "Diseño muestral", "Regresión", "Probabilidad", "Análisis multivariado"],
    },
    {
      categoria: "Herramientas",
      items: ["Git / GitHub", "Jupyter", "VS Code", "Excel avanzado", "SQL", "VBA"],
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
      repo: "https://github.com/nperezcu/riesgo-cartera-colombia",
      demo: "https://riesgo-cartera-colombia.streamlit.app/", 
      destacado: true,
    },
  ],

  /* ── Experiencia (línea de tiempo) ─────────────────────────────────────── */
 
experiencia: [
    {
      periodo: "Ene 2026 — Ago 2026",
      cargo: "Practica profesional, Área de Control Financiero",
      lugar: "Colombiana de Comercio (Corbeta S.A.)",
      descripcion: "Análisis de datos, desarrollo de tableros en Power BI e implementacion de medidas DAX " +
      "y transformaciones en Power Query. Automatización de procesos mediante macros en Visual Basic (VBA). " +
      "Conexión y consulta de bases de datos usando SQL y Oracle, y apoyo a procesos de inteligencia financiera " +
      "reduciendo tiempos manuales de horas a minutos. "
    },
    {
      periodo: "Jul 2025 — Dic 2025",
      cargo: "Consultor Estadístico",
      lugar: "Alianza Código Rojo",
      descripcion: "Construí desde cero una base de datos de más de 10.000 registros de emergencias médicas, " +
      "extrayendo y estandarizando datos no estructurados de conversaciones de WhatsApp (código de caso, "+
      "dirección, tipo de accidente, unidad asignada y hospital destino) con Python (Pandas, NumPy) y " + 
      "estructurándolos en Excel para el análisis." +
      "Apliqué análisis espacial sobre la base construida para identificar zonas críticas de alta demanda, "+
      "llevando a la organización a tomar decisiones de reubicación de ambulancias por primera vez basadas en evidencia.",
    }, 
    { 
      periodo: "Ene 2025 — Jun 2025",
      cargo: "Analista de Datos",
      lugar: "Viajes Descubre",
      descripcion: "Análisis de rentabilidad sobre +10.000 registros turísticos. " +
      "Automatización de reportes de KPIs con Power BI, reduciendo tiempos de 3 horas a 15 minutos."
    },
    {
      periodo: "Jun 2022 — Dic 2022",
      cargo: "Gestión y Validación de Datos Epidemiológicos",
      lugar: "Home Health",
      descripcion: "Aseguramiento de calidad y validación de +10.000 registros para el monitoreo de salud pública (Covid-19)." +
      "para el monitoreo de medidas preventivas y la toma de desiciones en salud pública."
    }
  ],

  /* ── Educación ─────────────────────────────────────────────────────────── */
  educacion: [
    {
      periodo: "En curso",
      titulo: "Pregrado en Estadística",
      lugar: "Universidad Nacional de Colombia — Bogotá",
      descripcion:
        "Estadística, matemática, inferencia, probabilidad, métodos estadisticos multivariados, series de tiempo " +
        "regresión lineal, lógica matematica, diseño muestral, análisis de datos, programación en R y Python, entre otros.",
    },
    {
      periodo: "2026",
      titulo: "Programa especializado en Ciencia de Datos (Coursera) – 3 cursos",
      lugar: "Universidad de los Andes - Coursera",
      descripcion:
        "Curso 1: Introducción a la ciencia de datos aplicada " +
        "Curso 2: Modelos predictivos con aprendizaje automatico "+
        "Curso 3: Integración y preparación de datos.",
    },
  ],

  /* ── Pie de página ─────────────────────────────────────────────────────── */
  footer: "Hecho con HTML, CSS y JavaScript puro — sin frameworks, fácil de mantener.",
};
