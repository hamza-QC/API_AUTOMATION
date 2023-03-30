 describe('Delete a User', () =>{
    it('Delete user',()=>{
        var user1 = {
            "name": "Hamza Shahbaz",
            "job": "DevOps"
        }

        cy.request('DELETE','/api/users/2').then((response)=>{
            expect(response.status).equal(204)
            cy.log(response)
           
        })
    })
})