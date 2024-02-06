const { Given,When,Then } = require("@badeball/cypress-cucumber-preprocessor")


export const authenticatePersonalDates = () => {
    const given = () => {
        Given('El usuario se encuentra en el login', () => cy.visit('/'))
    }
    const when = () => {
        When('Ingresa las credenciales', () =>{
            cy.setFieldsAuth();
            cy.buttonComponent();
            cy.wait(5000)
        })
    }
    const and = () => {
        When('Al usuario darle click al boton datos personales', () => cy.buttonDP())
    }

    const then = () => {
        Then('Que se vea el formulario de autorizacion', () => {
            cy.wait(1000);
            cy.validatePersonalDates();
        })
    }
    

    const testcausepersonaldates = () => {
        given()
        when()
        and()
        then()
    }
    return {
        given,
        when,
        and,
        then,
        testcausepersonaldates
    }
}