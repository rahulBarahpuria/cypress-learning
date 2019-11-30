describe('MyPhoneNext User Login', function () {


  beforeEach(() => {
    cy.visit('https://proxy-int.broadcloudpbx.net/myphonenext/', {timeout: 180000})
  })

  // var userjson;
  // before(function () {
  //   // runs once before all tests in the block
  //   userjson = cy.fixture('user_login.json').as('userjson');
  // });
  it('Launch MyPhoneNext and User Login', function () {
    // cy.repxlaunch();
    // cy.login();
    // // cy.logout();
    // cy.get('#player_39265036-3a7c-47e0-9670-8a47ba35de85', { timeout: 30000 }).click();
    // cy.get('#downloadButton', { timeout: 30000 }).click();
    // cy.visit('https://proxy-int.broadcloudpbx.net/myphonenext/');
    cy.get('#myphonenext_username', { timeout: 15000 }).type('basic@ci.in');
    cy.get('#myphonenext_password', { timeout: 15000 }).type('Welcome2022!');
    cy.get('#myphonenext_loginButton', { timeout: 15000 }).click();
    
  })
})