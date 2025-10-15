Nginx como Proxy para Aplicación Web
Frontend + Backend + Nginx + Fastify
Montar una aplicación web completa usando Docker Compose, con Nginx como proxy inverso, conectando el frontend y el backend.

Clonar el proyecto

git clone <url>
cd Tarea_S10
Navegar a backend
ejecutar
npm install
ejecuta
    docker-compose up --build
    Entra
Link: http://localhost/8080

Estructura de la carpeta

Tarea_S10/
├─ backend/
│  ├─ package.json
│  ├─ Dockerfile
│  └─ src/
│     ├─ index.js
│     ├─ Dockerfile
├─ frontend/
│  ├─ index.html
│  └─ Dockerfile
│  └─ app.js
├─ nginx/
│  └─ nginx.conf
└─ docker-compose.yml
Tecnologías
Node.js + Fastify → para el servidor backend.
HTML + JS + Bootstrap → para el frontend.
Nginx → como proxy inverso.
Docker Compose → para orquestar todos los servicios.
