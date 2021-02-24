/// <reference types="cypress" />

context('Users Components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/users')
  })
  it('.type() - type into a DOM element', () => {
    cy.get('#no-users-data').should('contain.text', 'No user data');
  })
})
