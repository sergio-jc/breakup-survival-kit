# Breakup Survival Kit

## ¿Qué es este proyecto?
**Breakup Survival Kit** es una aplicación diseñada para proporcionar respuestas automáticas y contenido relevante utilizando OpenAI. El backend ha sido desarrollado con **NestJS**, utilizando **WebSockets** para comunicación en tiempo real. Adicionalmente, se ha creado un frontend con **Vite.js** y **React** para visualizar las funcionalidades del backend de manera sencilla.

## Estructura del proyecto
Este repositorio está organizado en dos carpetas principales:

```
Breakup Survival Kit/
│-- api/   # Contiene el backend desarrollado con NestJS
│-- web/   # Contiene el frontend desarrollado con Vite.js y React
```

### 📌 **API (Backend - NestJS)**
Ubicada en la carpeta `api/`, esta parte del proyecto maneja la lógica del backend, incluyendo:
- Generación de respuestas con OpenAI.
- Manejo de WebSockets para comunicación en tiempo real.
- Endpoints REST para la gestión de mensajes.

📌 **Para ver más detalles sobre la configuración y ejecución del backend, revisa el README dentro de la carpeta `api/`.**

### 🎨 **WEB (Frontend - BitJS y React)**
Ubicada en la carpeta `web/`, esta parte del proyecto ofrece una interfaz gráfica simple para interactuar con el backend.
- Conexión a WebSockets para recibir respuestas en tiempo real.
- Interfaz para enviar mensajes y recibir contenido generado por OpenAI.

📌 **Para más detalles sobre la configuración y ejecución del frontend, revisa el README dentro de la carpeta `web/`.**

---

¡Gracias por revisar este proyecto! 🎉

