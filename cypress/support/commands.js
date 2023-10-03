Cypress.Commands.add("Authentication" , ( credentials )=>{
    cy.fixture("DOM/Login").then(( item ) =>{
            cy.session("authenticationSession", () => {
                cy.visit("/")
                cy.get( item.username ).type( credentials.username );
                cy.get( item.password ).type( credentials.password );
                cy.get( item.submitAuth ).click();
            } );
        });
});