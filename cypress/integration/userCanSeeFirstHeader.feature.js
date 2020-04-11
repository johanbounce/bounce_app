describe('First interface', () => {
  before(() => {
    cy.server()
  });
  
  it('shows first header', () => {
    cy.visit('/')
    cy.get("h1").should("contain", "Hello World");
  })
})
