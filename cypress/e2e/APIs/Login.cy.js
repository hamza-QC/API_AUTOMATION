import * as Login_request from '../Body/Login_request'

describe('POST /login', () => {
  let token;

  it('Should log in an account', () => {
    Login_request.login("fulano@qa.com", "teste").then((response) => {
      token = response.body.authorization
    }).as('response');

    cy.get('@response').then(response => {
      expect(response.status).to.be.equal(200);
      cy.log(token);
    });
  });
});