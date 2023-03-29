 describe('Update User', ()=> {
    it('Ùpdate user',()=>{
        var user1 = {
            "name": "Samantha",
            "job": "DevOps"
        }

        cy.request('PUT','/api/users/2',user1  ).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal(user1.name)
            expect(response.body.job).equal(user1.job)
        })
    })
 })