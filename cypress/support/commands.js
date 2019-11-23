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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
    cy.visit('https://proxy-int.broadcloudpbx.net/myphonenext/');
    cy.get('#myphonenext_username', { timeout: 15000 }).type('basic@ci.in');
    cy.get('#myphonenext_password', { timeout: 15000 }).type('Welcome2022!');
    cy.get('#myphonenext_loginButton', { timeout: 15000 }).click();
});

Cypress.Commands.add('repxlaunch', () => {
    cy.visit('https://proxy-int.broadcloudpbx.net/rep/');
    cy.get('#textUserName', { timeout: 30000}).type('MPNCustomerAdmin');
    cy.get('#textPassword', {timeout: 30000}).type('Welcome2027!');
    cy.get('#signInBtn', {timeout: 30000}).click();
    cy.get('#userAssignments', {timeout: 60000}).click();
    cy.get('#userAssignments', {timeout: 60000}).click();
});

Cypress.Commands.add('logout', () => {
    cy.wait(5000);
    cy.get('body > bs-app-root > div > bs-app-dashboard > div:nth-child(1) > app-login-banner > div > div.row > div.col-10.myphoneUserProfileDetailsText.ng-star-inserted > div > div.myphoneUserProfileAvator.myphoneUserProfileIcon > div.myphoneUserProfileMenu.myphoneMediumFont > div > div.myphoneBannerDownArrowContainer > div', {timeout: 20000}).click();
    cy.contains('Sign Out').click();
    


})
