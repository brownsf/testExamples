
beforeEach(() => {

});

it('should login', () => {
  cy.visit('/');
  cy.queryByLabelText('Username').click()
    .type('Scott');
  cy.queryByLabelText('Password')
    .click()
    .type('super password');
  cy.findByText('Login').click();
});
it('has 2 nav buttons', () => {
  cy.get('button')
    .should('have.length', 2);
});

it('navigates to the calc page', () => {
  cy.findByText('code').click();
  cy.findByText('Do some math,Scott').should('exist');
});

it('add numbers', () => {
  cy.findByPlaceholderText('First Number').click().type('1');
  cy.findByPlaceholderText('Second Number').click().type('3');
  cy.findByText('+').click();
  cy.queryByTestId('result').should('contain', '4');
});
