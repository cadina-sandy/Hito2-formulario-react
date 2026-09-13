# 🍕 Pizzería Mamma Mía

Proyecto realizado para el desafío **Hito 2 - Pizzería Mamma Mía**, donde se implementan formularios de registro e inicio de sesión utilizando estados y eventos en React.

## 📝 Descripción

La aplicación permite navegar entre una página de inicio, un formulario de registro y un formulario de inicio de sesión.

Los formularios utilizan el hook `useState` para almacenar los datos ingresados y muestran mensajes de éxito o error según el resultado de las validaciones.

## ✨ Funcionalidades

- Navegar entre las vistas Inicio, Registro e Ingresar sin recargar la página.
- Registrar un email, una contraseña y la confirmación de la contraseña.
- Iniciar sesión utilizando email y contraseña.
- Comprobar que todos los campos estén completos.
- Validar que la contraseña contenga al menos 6 caracteres.
- Comprobar que las contraseñas coincidan en el formulario de registro.
- Mostrar mensajes de error cuando los datos no cumplen las validaciones.
- Mostrar mensajes de éxito cuando los datos son correctos.
- Limpiar los campos después de enviar correctamente un formulario.
- Adaptar la interfaz a pantallas de escritorio y dispositivos móviles.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- Vite

## 📁 Estructura del proyecto

```text
Hito2-reacts/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Inicio.jsx
│   │   ├── Login.jsx
│   │   └── Registro.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## ⚙️ Cómo funciona

En `App.jsx` se utiliza un estado para controlar cuál vista debe mostrarse. El componente `Header` permite cambiar entre Inicio, Registro e Ingresar.

El componente `Registro.jsx` utiliza estados para guardar el email, la contraseña y la confirmación. Al enviar el formulario, comprueba que los campos estén completos, que la contraseña tenga al menos 6 caracteres y que ambas contraseñas sean iguales.

El componente `Login.jsx` guarda el email y la contraseña, y valida que ambos campos estén completos y que la contraseña tenga al menos 6 caracteres.

El encabezado y el pie de página utilizan un diseño azul oscuro. El pie de página incluye el texto **Hecho por Sandy Cadin**.

## 💻 Ejecutar el proyecto

Para instalar las dependencias:

```bash
npm install
```

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

## ⬆️ Subida del proyecto

El código fue guardado y subido a GitHub en la rama `main`.

## 🔗 Repositorio

[Ver repositorio en GitHub](https://github.com/cadina-sandy/Hito2-formulario-react)

## 👩‍💻 Autora

**Sandy Cadin**
