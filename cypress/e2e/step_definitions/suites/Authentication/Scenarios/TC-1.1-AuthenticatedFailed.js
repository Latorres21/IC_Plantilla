const { Given,When,Then } = require("@badeball/cypress-cucumber-preprocessor")
export const authenticatedFailedTestCase = () => {
    const given = () => {
        Given('El usuario se encuentra en la pagina de login fallido',()=>{
            cy.visit('/')
        })
    }
    const when = () => {
        When('Ingresar un usuario y contraseña invalida o vacia.',()=>{
            cy.setFieldsAuth({username: '000000', password:'010101' })
        })
    }
    const and = () => {
        When('Al hacer click en iniciar sesion fallido.',()=>{
            //cy.buttonComponent()
        })
    }
    const then = () => {
        Then('Se espera que cargue una alerta o mensaje indicacando que no fue posible iniciar sesion debido a las crendenciales invalidas.',()=>{
             cy.validateByError() 
            
        })
    }

    const executeTestCase = () => {
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
        executeTestCase
    }
}