FROM nginx

RUN mkdir -p /app
COPY ./build /app/
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD exec nginx -g 'daemon off;'
