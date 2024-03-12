// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
  Cypress.Commands.add('login', (user, password) => { 
       // cy.get('[data-testid="login-uname-text"]').type(user)
        cy.get('[data-testid="login-pwd"]').type(password)
        cy.get('[data-testid="login-btn"]').click()
        cy.url().should('not.include',"login")
              
})

  Cypress.Commands.add("login-session",()=>{
    cy.session("session-restore",()=>{
      cy.visit("http://vayanjan-dev.s3-website-us-east-1.amazonaws.com/") // site should be inside session 
      cy.login("dummy","dummy")
      cacheAcrossSpecs: true

    })
    cy.visit('http://vayanjan-dev.s3-website-us-east-1.amazonaws.com/welcome/dummy')
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })