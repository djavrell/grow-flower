# To build and run with Docker:
#
#  $ docker build -t ng2-quickstart .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 ng2-quickstart
#
FROM node:6.2.1
RUN npm install typings webpack-dev-server rimraf webpack -g
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install
RUN typings install
RUN npm run build:prod
CMD npm run server:prod
EXPOSE 8080
