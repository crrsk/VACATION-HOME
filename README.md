# 🏡 Vacation Home Booking App

Una aplicación web moderna y ligera para la gestión de reservas de una casa vacacional. Este proyecto utiliza **React** para una interfaz dinámica y **Supabase** como backend en la nube para el manejo de datos en tiempo real.



## 📋 Tabla de Contenidos
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Estructura de la Base de Datos](#-estructura-de-la-base-de-datos)
- [Despliegue](#-despliegue)

---

## ✨ Características

* **Calendario de Disponibilidad:** Consulta de fechas libres sincronizada con la base de datos.
* **Formulario de Reserva:** Registro de datos del huésped (nombre, fechas, contacto).
* **Actualizaciones en Tiempo Real:** Si alguien reserva, los cambios se reflejan instantáneamente gracias a los WebSockets de Supabase.
* **Diseño Responsive:** Optimizado para móviles, tablets y escritorio.

## 🛠️ Tecnologías

* **Frontend:** [React.js](https://reactjs.org/) (Hooks, Context API).
* **Estilos:** CSS3 nativo (Custom Properties y Grid/Flexbox).
* **Backend & DB:** [Supabase](https://supabase.com/) (PostgreSQL + Realtime).
* **Cliente de API:** `@supabase/supabase-js`.

## ⚙️ Requisitos Previos

Antes de empezar, asegúrate de tener instalado:
* [Node.js](https://nodejs.org/) (v14 o superior).
* Una cuenta activa en [Supabase](https://app.supabase.com/).

## 🚀 Instalación y Configuración

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
   cd nombre-del-repo