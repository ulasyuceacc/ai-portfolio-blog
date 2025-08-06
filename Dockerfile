# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the website's files to the Nginx public directory
COPY . /usr/share/nginx/html

# Expose port 80 to allow traffic to the web server
EXPOSE 80