describe('First interface', () => {
  before(() => {
    cy.exec("yarn start")
  });
  
  it('shows first header', () => {
    cy.visit('/')
    cy.get("h1").should("contain", "Hello World");
  })
})
