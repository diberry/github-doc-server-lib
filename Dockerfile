# docker build --no-cache -t diberry-node .
# docker run -it --rm -v /Users/diberry/repos/dina/eslint-with-typescript:/server diberry-node /bin/bash

# windows
# docker run -it --rm -v c:/Users/diberry/repos/dina/eslint-with-typescript:/server diberry-node /bin/bash


FROM node:8-slim

RUN apt update -y && \
  apt-get install -y apt-utils && \
  apt-get install -y wget && \
  apt-get install -y git && \
  apt-get install nano

WORKDIR /server

COPY . /server
RUN npm install
RUN pwd
RUN ls

WORKDIR /server

