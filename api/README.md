# Breakup Survival Kit - API

## 📌 Descripción
Este es el backend del proyecto **Breakup Survival Kit**, desarrollado con **NestJS**. Proporciona servicios para la generación de respuestas con OpenAI y la gestión de mensajes en tiempo real mediante WebSockets.

## 🚀 Instalación y ejecución
Para ejecutar la API, sigue estos pasos:

1. **Navega a la carpeta `api/`**
   ```sh
   cd api
   ```

2. **Instala las dependencias**
   ```sh
   npm install
   ```

3. **Configura el archivo `.env`**
   Crea un archivo `.env` en la raíz del directorio con las siguientes claves:
   ```env
   OPENAI_API_KEY=tu_api_key_aqui
   SERAPI_API_KEY=tu_api_key_aqui
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_base_datos
   ```

4. **Inicializa la base de datos** (solo la primera vez o tras cambios en la estructura)
   ```sh
   npx prisma migrate dev --name init
   ```

5. **Inicia el servidor en modo desarrollo** (recomendado)
   ```sh
   npm run start:dev
   ```
   El backend correrá en `http://localhost:3000`

6. **Accede a la documentación de la API**
   - Visita `http://localhost:3000/api` para ver la documentación con todos los endpoints disponibles.

7. **Conexión WebSocket**
   - El servidor WebSocket está disponible en `ws://localhost:8001`.

## 📂 Estructura del proyecto
```
api/
│-- src/        # Código fuente principal
│-- prisma/     # Definiciones del esquema de base de datos
│-- package.json  # Dependencias del proyecto
│-- README.md  # Documentación del backend
```
---

¡Gracias por revisar este proyecto! 🚀

