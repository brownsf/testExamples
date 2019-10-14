
beforeEach(() => {
  cy.visit('/');
});
it('has 2 nav buttons', () => {
  cy.get('button')
    .should('have.length', 2);
});
