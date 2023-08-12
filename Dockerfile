FROM node:alpine
WORKDIR /usr/app/gefest
EXPOSE 3000
COPY ./ ./
RUN npm install
CMD ["npm", "start"]