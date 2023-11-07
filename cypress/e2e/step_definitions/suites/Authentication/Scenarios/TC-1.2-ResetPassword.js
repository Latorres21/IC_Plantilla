import { Given, Then ,When} from "@badeball/cypress-cucumber-preprocessor"

export const resetPassword = () => {
    const executeTestCase = () =>{
        Given('Un usuario esta en login y requiere restablecer contraseña',()=>{
            cy.visit('/')
        })
        When('Cuando le da en el boton de restablecer contraseña',()=> {
            cy.existHrefResetPassword()
        })
        Then('Que se redireccione a la pagina para realizarlo',()=> {
            cy.validateRedirectResetPassword()
        })
    }

    return {
        executeTestCase
    }
    
}