# Use official nginx image
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Vite app (make sure you've run `npm run build`)
COPY dist /usr/share/nginx/html

# Optional: Use custom nginx config (uncomment if you have nginx.conf)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose default port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
