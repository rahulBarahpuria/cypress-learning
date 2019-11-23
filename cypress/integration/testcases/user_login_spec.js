describe('MyPhoneNext User Login', function () {
  var userjson;
  before(function () {
    // runs once before all tests in the block
    userjson = cy.fixture('user_login.json').as('userjson');
  });
  it('Launch MyPhoneNext and User Login', function () {
    // cy.repxlaunch();
    cy.login();
    cy.logout();
    
  })
})