describe('Search Graphic Cards by name or brand', () => {
  beforeEach(() => {
    cy.intercept('GET', '/graphics-cards', { fixture: 'GPU-list.json' }).as('getGraphicsCards');
    cy.visit('/');
  });

  it('should search for Graphic Cards by name or brand', () => {
    // Type a search term in the search bar
    cy.get('[data-cy=search-bar]').type('ASUS ROG Strix GeForce');
    // Check if the cards are filtered by name
    cy.get('[data-cy=graphics-card]').each((card) => {
      cy.wrap(card).should('contain.text', 'ASUS ROG Strix GeForce');
    });
  });
});
