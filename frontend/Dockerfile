# Usamos nginx para servir archivos estáticos
FROM nginx:alpine AS production


# Borrar el contenido default
RUN rm -rf /usr/share/nginx/html/*


COPY public /usr/share/nginx/html


EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]