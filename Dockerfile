# base image
FROM cypress/browsers:node10.2.1-chrome74

RUN mkdir /usr/src/app

RUN mkdir /usr/tmp

# set working directory
WORKDIR /usr/src/app

# install cypress
RUN npm install cypress

# copy cypress files and folders
COPY cypress/integration /usr/tmp

COPY cypress.json /usr/src/app/cypress.json
RUN mkdir -p /usr/src/app/cypress/fixtures
RUN mkdir -p /usr/src/app/cypress/plugins
RUN mkdir -p /usr/src/app/cypress/support
RUN mkdir -p /usr/src/app/cypress/integration

#COPY other config files and folders
COPY cypress/fixtures /usr/src/app/cypress/fixtures
COPY cypress/support /usr/src/app/cypress/support
COPY cypress/plugins /usr/src/app/cypress/plugins

ADD entrypoint.sh /usr
RUN chmod +x /usr/entrypoint.sh
# confirm the cypress install
RUN ./node_modules/.bin/cypress verify

ENTRYPOINT ["/usr/entrypoint.sh"]






