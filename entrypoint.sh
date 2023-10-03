#!/bin/sh

# Iniciar las pruebas de Cypress... con los modulos que quieras
npx cypress run &
exit_code=$?

# Esperar a que las pruebas finalicen
wait $!

# Generar report
node cucumber-html-report.js

if [ $exit_code -ne 0 ]; then
    # Si las pruebas fallaron
    exit 0
else
    # Si las pruebas pasaron
    exit 1
fi