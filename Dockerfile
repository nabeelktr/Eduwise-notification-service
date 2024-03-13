FROM node:21-alpine3.18

WORKDIR /app

COPY package.json package-lock.json .

RUN npm install

COPY . .

RUN npx tsc

EXPOSE $NOTIFICATION_PORT

ENV NOTIFICATION_PORT=3001
ENV RabbitMQ_Link=amqps://pyyoxazm:bgZzX-lP9cJecVj4ZcIDw0uXa2bVbivY@puffin.rmq2.cloudamqp.com/pyyoxazm
ENV SMTP_HOST=smtp.gamil.com
ENV SMTP_PORT=465
ENV SMPT_SERVICE=gmail
ENV SMTP_MAIL=nabee446@gmail.com
ENV SMTP_PASSWORD="iaha cygc uxct jltd"

CMD ["npm", "start"]

