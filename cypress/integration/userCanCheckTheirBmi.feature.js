describe("User can check their BMI", () => {
  it("User can enter their weight and height", () => {
    cy.visit("/");
    cy.contains("BMI Calculator");
    cy.get("#weight").type("90");
    cy.get("#height").type("186");
    cy.get("#calculate").click();
  });
  it("is expected to display BMI value of 26.01", () => {
    cy.get("#results").should("contain", "26.01");
  });
});
