FROM nginx:latest

# noop for legacy migration
RUN mkdir /app && \
    mkdir /img && \
    echo "#!/bin/bash" > /app/migrate.sh && \
    chmod +x /app/migrate.sh && \
    chmod 775 /usr/share/nginx/html/

COPY html /home/sando

COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
