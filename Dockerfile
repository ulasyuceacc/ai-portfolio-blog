# Lightweight Nginx image to serve a static site (HTML/CSS/JS)
FROM nginx:1.27-alpine

# Clear default Nginx web root
RUN rm -rf /usr/share/nginx/html/*

# Configure Nginx to listen on port 8080
RUN sed -i 's/listen\s*80;/listen 8080;/' /etc/nginx/conf.d/default.conf

# Copy static assets into Nginx web root
# Copy only the static site assets
COPY *.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY images /usr/share/nginx/html/images

# Run Nginx in the foreground
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]