describe('User can check their BMI', () => {
        it('User can enter their weight and height', () => {
                cy.visit('http://localhost:3474')
                cy.contains('BMI Calculator')
                cy.get('#weight').type('90')   
                cy.get('#height').type('186')
                cy.get('#Calculate').click()
        });
        it('displays BMI value of 26.01'), () => {
                cy.get('#result').should('contain', '26.01')
                        }
});
