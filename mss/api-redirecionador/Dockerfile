# Use the official NGINX base image
FROM nginx:stable-alpine

# Copy your custom NGINX configuration file
# Ensure your nginx.conf is in the same directory as the Dockerfile
COPY nginx.conf /etc/nginx/nginx.conf

# Optionally, copy any additional configuration files or static content
# For example, if you have a custom default.conf or specific server blocks
# COPY default.conf /etc/nginx/conf.d/default.conf

# Expose the default NGINX HTTP port
EXPOSE 80

# Expose the default NGINX HTTPS port (if using SSL/TLS)
EXPOSE 443

# Command to run NGINX in the foreground so Docker can manage the process
CMD ["nginx", "-g", "daemon off;"]
