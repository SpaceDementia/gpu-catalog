describe('Graphics Card details', () => {
  beforeEach(() => {
    cy.intercept('GET', '/graphics-cards', { fixture: 'GPU-list.json' }).as('getGraphicsCards');
    cy.visit('/graphics-cards/asus-rog-strix-geforce-rtx-3090');
  });

  it('displays the details of the selected Graphics Card', () => {
    cy.get('[data-cy=graphics-card-image]').should('have.attr', 'src').should('include', '../assets/images/asus-rog-strix-geforce-rtx-3090.webp');
    cy.get('[data-cy=graphics-card-name]').should('contain', 'ASUS ROG Strix GeForce RTX 3090 OC Edition');
    cy.get('[data-cy=graphics-card-price]').should('contain', '1500€');
    cy.get('[data-cy=graphics-card-manufacturer] > span.info').should('contain', 'ASUS');
    cy.get('[data-cy=graphics-card-memory] > span.info').should('contain', '24GB GDDR6X');
    cy.get('[data-cy=graphics-card-core-clock] > span.info').should('contain', '1395 MHz');
    cy.get('[data-cy=graphics-card-boost-clock] > span.info').should('contain', '1695 MHz');
    cy.get('[data-cy=graphics-card-cuda-cores] > span.info').should('contain', '10496');
  });

  it('displays a button to go back to the Graphics Cards catalog', () => {
    cy.get('[data-cy=go-back]').should('be.visible');
  });
});
