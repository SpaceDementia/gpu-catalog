describe('Initial pagination', () => {
  beforeEach(() => {
    cy.intercept('GET', '/graphics-cards', { fixture: 'GPU-list.json' }).as('getGraphicsCards');
    cy.visit('/');
  });

  it('Displays the first 8 Graphic Cards on page loading', () => {
    cy.get('[data-cy=graphics-card]').should('have.length', 8);
  });
});
