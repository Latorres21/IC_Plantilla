const { Given,When,Then } = require("@badeball/cypress-cucumber-preprocessor")
export const authenticatedSuccesfullyTestCase = () => {
    const given = () => {
        Given('El usuario se encuentra en la pagina de login exitoso',()=> cy.visit('/')) 
    }
    const when = () => {
        When('Ingresar un usuario y contraseña valido.',()=> cy.setFieldsAuth() )
    }
    const and = () => {
        When('Al hacer click en iniciar sesion.', ()=> cy.buttonComponent() ) 
    }
    const then = () => {
        Then('que se direccione a la pagina principal',()=> {
            cy.validateLoginByElement()
            cy.wait(1000)
        })
    }

    const testCaseAuthSuccess = () => {
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
        testCaseAuthSuccess
    }
}