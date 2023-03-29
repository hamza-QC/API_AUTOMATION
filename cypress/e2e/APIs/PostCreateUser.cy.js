 describe('Create User',() => {
    it('POST-Create user',()=>{
        var user = {
            "name": "Hamza Shahbaz",
            "job": "QA"
        }

        cy.request('POST','/api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
           
        })
        cy.request('POST','/api/users',user).its('body').should('include',{name:'Hamza Shahbaz'})
    })
 })