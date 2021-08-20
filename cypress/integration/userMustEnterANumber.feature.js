describe('User must enter a nubmer', () => {
  it('User must enter a number', () => {
    cy.visit("/")
    cy.get("#weight").type("apples");
    cy.get("#height").type("186");
    cy.get("#calculate").click();
  });
  it('is expected to display please enter a number', () => {
    cy.get("#results").should('contain', 'Please enter a number.')
  });
});