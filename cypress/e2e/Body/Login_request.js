function login(email, password) {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: email,
        password: password
      }
    })
  }
  
  export { login }