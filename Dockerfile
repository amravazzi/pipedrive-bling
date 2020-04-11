FROM node:13

# Create app directory
WORKDIR /srv/app

# Install app dependencies
COPY package*.json ./

RUN yarn

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "yarn", "dev" ]