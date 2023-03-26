
describe('GPU Catalog', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal', 'GPU Catalog');
  });
});
