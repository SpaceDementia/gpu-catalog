describe('Initial pagination', () => {
  beforeEach(() => {
    cy.intercept('GET', '/graphics-cards', { fixture: 'GPU-list.json' }).as('getGraphicsCards');
    cy.visit('/');
  });

  it('Displays the first 8 Graphics Cards on page loading', () => {
    cy.get('[data-cy=graphics-card-card]').its('length').should('be.eq', 8);
  });

  it('Displays more Graphics Cards when scrolling to the end of the page', () => {
    // Check if the first 8 Graphics Cards have been loaded
    cy.get('[data-cy=graphics-card-card]').its('length').should('be.gte', 8);

    // Scroll down
    cy.get('[data-cy=graphics-card-card]:last')
      .then(($lastCard) => {
        // Scroll to the last element
        $lastCard[0].scrollIntoView();
      })

    // Wait 1s until more Graphics Cards are loaded
    cy.wait(1000);

    // Check if the next 8 Graphics Card have been loaded
    cy.get('[data-cy=graphics-card-card]').its('length').should('be.eq', 16);
  });
});
