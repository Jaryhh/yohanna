# 🎂 Carta de Cumpleaños para Yohanna

Una hermosa carta de cumpleaños animada y responsive, diseñada con amor.

## 📁 Estructura del Proyecto

```
carta_cumpleanos/
│
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos organizados
├── js/
│   └── animations.js   # Animaciones e interacciones
├── img/                # Carpeta para las fotos
│   └── (aquí van tus fotos)
└── README.md          # Este archivo
```

## 🖼️ Cómo Agregar Fotos

Actualmente hay 3 espacios para fotos de Yohanna. Para reemplazar los placeholders:

1. **Guarda tus fotos** en la carpeta `img/` con nombres descriptivos:
   - `foto1.jpg` - Tu sonrisa ilumina mi mundo
   - `foto2.jpg` - Hermosa por dentro y por fuera
   - `foto3.jpg` - Mi amor eterno

2. **Edita el archivo `index.html`** y busca los elementos con clase `photo-placeholder`

3. **Reemplaza cada placeholder** con una etiqueta de imagen:

   ```html
   <!-- Antes -->
   <div class="photo-placeholder">
       <div>
           Tu sonrisa<br>ilumina<br>mi mundo
       </div>
   </div>

   <!-- Después -->
   <img src="img/foto1.jpg" alt="Yohanna" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
   ```

## 🎨 Características

- ✨ **Completamente responsive** - Se adapta a móviles, tablets y PC
- 💕 **Animaciones románticas** - Corazones flotantes y efectos de brillo
- 🌸 **Diseño elegante** - Colores suaves y tipografía hermosa
- 📱 **Optimizada para móvil** - Yohanna la verá perfecta en su celular
- 🎭 **Efectos interactivos** - Haz clic en cualquier lugar para ver brillos

## 🚀 Cómo Usar

1. Abre el archivo `index.html` en cualquier navegador web
2. También puedes subirlo a un servidor web para compartir el enlace
3. Funciona sin conexión a internet (excepto las fuentes de Google)

## 💝 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary-rose: #d4a5a5;      /* Rosa principal */
    --secondary-rose: #f7e8e8;    /* Rosa secundario */
    --dark-rose: #8b6b6b;         /* Rosa oscuro */
    --text-dark: #4a3434;         /* Color del texto */
}
```

### Modificar Textos
Edita los párrafos directamente en `index.html` dentro de las etiquetas `<p>`

### Ajustar Animaciones
Modifica las funciones en `js/animations.js` para cambiar velocidad o efectos

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ Dispositivos móviles iOS y Android
- ✅ Tablets y computadoras

## 💌 Consejos

- Las fotos funcionan mejor en formato **cuadrado** (1:1)
- Resolución recomendada: **800x800 píxeles** o superior
- Formatos soportados: JPG, PNG, WEBP
- Para mejor rendimiento, optimiza las imágenes antes de subirlas

---

Hecho con ❤️ para Yohanna
