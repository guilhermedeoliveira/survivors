describe('Surivors e2e testing', () => {
  it('should navigate correctly', () => {
    // Navigate to App
    cy.
       visitApp()

    // Check DOM elements
    cy
      .contains('Survivors')
    cy
      .contains('Map')
    cy
      .contains('Reports')
    cy
      .get('h1')
    cy
      .get('h2')

    // Fill form
    cy
      .get('input[name="name"]')
      .clear()
      .type('Guilherme Oliveira')

    cy
      .get('input[name="age"]')
      .clear()
      .type('29')

    cy
      .get('input[name="age"]')
      .clear()
      .type('29')
   
    cy
      .get('input[type="radio"]').not('[disabled]')
      .check().should('be.checked')

    cy
      .get('input[name="water"]')
      .clear()
      .type('10')

    cy
      .get('input[name="food"]')
      .clear()
      .type('9')

    cy
      .get('input[name="medication"]')
      .clear()
      .type('5')

    cy
      .get('input[name="ammunition"]')
      .clear()
      .type('11')
    
    cy
      .contains('Get My Coords')
      .click()

    cy
      .contains('Register')
      .click()

    // Enter map route
    cy
      .contains('Map')
      .click()

    cy
      .location().should((location) => {
        expect(location.pathname).to.eq('/map')
    })

    // Enter map route
    cy
      .contains('Reports')
      .click()

    cy
      .location().should((location) => {
        expect(location.pathname).to.eq('/reports')
    })
  })
})