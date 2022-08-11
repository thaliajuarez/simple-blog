# pull the official base image
FROM node:16-alpine
# set working direction
WORKDIR /client
# add `/app/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "start"]