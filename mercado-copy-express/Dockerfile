#base image
FROM node:8

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# copies local files to container
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
