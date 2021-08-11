describe('User can check their BMI', () => {
        it('User can enter their weight and height', () => {
                cy.visit('http://localhost:3474')
                cy.contains('BMI Calculator')   
        });  
});
