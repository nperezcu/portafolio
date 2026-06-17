# 🌐 Portafolio web — Científico de Datos

Sitio estático en **HTML + CSS + JavaScript puro**: sin frameworks, sin build,
sin dependencias. Se abre con doble clic y se despliega gratis en minutos.

## 📁 Estructura

```
Pagina web portafolio/
├── index.html        # Estructura de la página (no suele necesitar cambios)
├── css/styles.css    # Estilos — la paleta se cambia en las variables de :root
├── js/
│   ├── data.js       # ★ TODO EL CONTENIDO — el único archivo que editas
│   └── main.js       # Lógica que pinta data.js (no tocar normalmente)
├── assets/           # Imágenes de proyectos + tu cv.pdf
└── README.md
```

## ✏️ Cómo editar el contenido

**Todo se edita en `js/data.js`.** Abre el archivo y cambia los textos:

| Quiero cambiar… | Edito en `data.js`… |
|---|---|
| Nombre, título, frases del hero | `nombre`, `titulo`, `frases` |
| Texto del perfil | `sobreMi` (lista de párrafos) |
| Links de GitHub/LinkedIn | `redes` (deja `""` para ocultar una red) |
| Habilidades | `habilidades` (categorías con chips) |
| **Agregar un proyecto** | Copia un bloque `{ ... }` dentro de `proyectos`, pégalo debajo y cambia los textos. La imagen va en `assets/` |
| Experiencia / educación | `experiencia` y `educacion` |
| Estadísticas destacadas | `datosRapidos` |

**Tu CV:** guarda tu hoja de vida como `assets/cv.pdf` y el botón
"Descargar CV" funcionará automáticamente.

**Paleta de colores:** en `css/styles.css`, bloque `:root` (tema oscuro) y
`[data-theme="light"]` (tema claro).

## 👀 Ver la página en tu PC

Doble clic en `index.html` — funciona directo en el navegador.
(Opcional, con recarga automática: `python -m http.server` en esta carpeta
y abre http://localhost:8000)

## 🚀 Desplegar gratis

### Opción A — GitHub Pages (recomendada, dominio `tuusuario.github.io`)

1. Crea un repositorio en GitHub llamado **`TUUSUARIO.github.io`**
   (con tu nombre de usuario exacto).
2. Sube el **contenido** de esta carpeta (que `index.html` quede en la raíz
   del repo):
   ```bash
   cd "Pagina web portafolio"
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/TUUSUARIO/TUUSUARIO.github.io.git
   git push -u origin main
   ```
3. Listo: en 1–2 minutos tu página queda en `https://TUUSUARIO.github.io`.
   Cada `git push` posterior la actualiza sola.

> Si prefieres otro nombre de repo: Settings → Pages → Source: `main` →
> la URL será `https://TUUSUARIO.github.io/nombre-del-repo`.

### Opción B — Netlify (más rápida, sin git)

1. Entra a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra la carpeta `Pagina web portafolio` completa a la ventana.
3. Te da una URL pública al instante (puedes cambiar el subdominio gratis).

### Opción C — Vercel / Cloudflare Pages

Ambas detectan sitios estáticos automáticamente: conecta el repo y despliega
sin configuración.

## ✅ Pendientes después de publicar

- [ ] Reemplazar `TU_USUARIO` en `js/data.js` (GitHub y LinkedIn).
- [ ] Poner tu `cv.pdf` en `assets/`.
- [ ] Actualizar el link `repo` de cada proyecto cuando subas el código a GitHub.
- [ ] (Opcional) Foto real: cambia el `<div class="avatar">` por una `<img>` en
      `index.html` o pídeme que lo haga.
