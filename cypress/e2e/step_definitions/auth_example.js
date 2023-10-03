import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
let usernama = "1007678665"
let password = "savvjVcd5l"
When("Se ingresa a IC", () => {
  cy.visit("/");
  cy.Authentication({username:usernama,password:password})
});

Then("Desplegar el formulario de inicio de sesion.", () => {
  cy.get('.MuiTypography-root').should('be.visible'); 
});


When("Se ingresa a IC Error.", () => {
  cy.visit("/");
  cy.Authentication({username:usernama,password:'1587'})
});

Then("Desplegar el formulario de inicio de sesion Error.", () => {
  cy.get('.MuiTypography-root'); 
});



// Bloque de error 
/* 
Scenario: visiting the frontpage (Error)
When I visit duckduckgo.com Error
Then I should see a search bar Error


When("I visit duckduckgo.com Error", () => {
  cy.visit("/");
});

Then("I should see a search bar Error", () => {
  cy.get("#searchbox_input").should(
    "have.attr",
    "placeholder",
    "Search the web without being trackedwa"
  );
});
 */