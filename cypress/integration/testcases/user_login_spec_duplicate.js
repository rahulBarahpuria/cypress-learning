describe('MyPhoneNext User Login', function () {
  var userjson;
  before(function () {
    // runs once before all tests in the block
    userjson = cy.fixture('user_login.json').as('userjson');
  });
  it('Launch MyPhoneNext and User Login', function () {
    // cy.repxlaunch();
    cy.login();
    // cy.logout();
    // cy.get('#player_39265036-3a7c-47e0-9670-8a47ba35de85', { timeout: 30000 }).click();
    // cy.get('#downloadButton', { timeout: 30000 }).click();
    
  })
})