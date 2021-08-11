describe('User can check their BMI', () => {
        it('User can enter their weight and height', () => {
                cy.visit('http://localhost:3474')
                cy.contains('BMI Calculator')
                cy.get('#weight').type('78')   
                cy.get('#height').type('185')
                cy.get('#Calculate').click()
        });  
});
