import { GlobalCrential } from "../selectors/AuthenticationSelectos/gobalCredentials";

Cypress.Commands.add("Authentication" , ( credentials = GlobalCrential )=>{
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
    cy.fixture("DOM/Login").then(( item ) =>{
        
            cy.session("authenticationSession", () => {
                
                cy.visit("/")
                cy.get( item.username ).type( credentials.username );
                cy.get( item.password ).type( credentials.password );
                cy.get( item.submitAuth ).click();
            });
        });
});