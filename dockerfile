FROM cypress/browsers:latest
RUN mkdir /GestidentTesting

WORKDIR /GestidentTesting
COPY ./package.json .
COPY .cypress-cucumber-preprocessorrc.json . 
COPY  ./cypress.config.js . 
COPY ./cucumber-html-report.js .
COPY ./cypress ./cypress

RUN npm cache clean --force
RUN npm install
#ENTRYPOINT ["npx", "cypress", "run" ]
#CMD ["npm", "run", "cy:report"]

# Copiar un script de inicio personalizado al contenedor
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Definir el ENTRYPOINT que ejecutará el script de inicio
ENTRYPOINT ["/entrypoint.sh"]