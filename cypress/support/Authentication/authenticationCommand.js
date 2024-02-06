import { authButtonSelector, authInputSelector, resetPassword, validatePD, validateRedirectLogin } from "../../selectors/AuthenticationSelectos/authenticationSelectors";
import { GlobalCrential } from "../../selectors/AuthenticationSelectos/gobalCredentials";

Cypress.Commands.add('setFieldsAuth', (setCredentials = GlobalCrential ) => {
    let values = Object.values(setCredentials);
    cy.clearLocalStorage()
    cy.clearCookies()
    authInputSelector.forEach((reference, index) => {
        cy.get(reference).type(values[index])
    })
})
Cypress.Commands.add('buttonComponent', ()=> {
    return cy.get(`button:contains("${authButtonSelector.authButton}")`).click()
})



Cypress.Commands.add('buttonDP', ()=> {
    return cy.get('.MuiListItemButton-root').eq(2).click()
})



Cypress.Commands.add('validatePersonalDates', () => cy.get(validatePD.byElementPD).should('contains.text', 'Información Basica'))



Cypress.Commands.add('validateLoginByUrl', ()=> cy.url().should('include', validateRedirectLogin.url  )  )
Cypress.Commands.add('validateLoginByElement' , () => cy.get(validateRedirectLogin.byElement).should('be.visible')  )

Cypress.Commands.add('validateByError' , ()=> {
    cy.get(`button:contains("${authButtonSelector.authButton}")`).click().then(()=> {
        cy.get(validateRedirectLogin.byError.popUp).should('be.visible')
        cy
            .get(validateRedirectLogin.byError.popUpLabel.referenceId)
            .should('include.text', validateRedirectLogin.byError.popUpLabel.messageError)
        
    })
} )
Cypress.Commands.add('existHrefResetPassword',()=> cy.get('body').should('include.text' , resetPassword.label )  )
Cypress.Commands.add('validateRedirectResetPassword', ()=> {
    cy.contains(resetPassword.label).should('be.visible').should('have.attr' , 'href' , resetPassword.redirectUrl )
})

