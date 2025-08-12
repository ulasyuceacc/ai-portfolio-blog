# Lightweight Nginx image to serve a static site (HTML/CSS/JS)
FROM nginx:1.27-alpine

# Clear default Nginx web root
RUN rm -rf /usr/share/nginx/html/*

# Copy static assets into Nginx web root
# Copy only the static site assets
COPY *.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY images /usr/share/nginx/html/images

# Expose HTTP port
EXPOSE 80

# Run Nginx in the foreground
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]