describe('Navigation', () => {
  it('should navigate to the home page and find a title', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // The new url should include "/about"
    cy.url().should('include', '/')

    // The new page should contain an h1 with num of players
    cy.get('h1').should('contain', '806')
  })

  it('should navigate to the dear-players page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get("[cy-test='dear-players']").click()

    // The new url should include "/dear-players"
    cy.url().should('include', '/dear-players')

    // The new page should contain an h1 with "Dear Players,"
    cy.get('h1').should('contain', 'Dear Players,')
  })

  it('should navigate to the dear-sponsors page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "dear-sponsors" and click it
    cy.get("[cy-test='dear-sponsors']").click()

    // The new url should include "/dear-sponsors"
    cy.url().should('include', '/dear-sponsors')

    // The new page should contain an h1 with "Dear Sponsors,"
    cy.get('h1').should('contain', 'Dear Sponsors,')
  })

  it('should navigate to the business-sponsors page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "business-sponsors" and click it
    cy.get("[cy-test='business-sponsors']").click()

    // The new url should include "/business-sponsors"
    cy.url().should('include', '/business-sponsors')

    // The new page should contain an h1 with "Our Business Sponsors"
    cy.get('h1').should('contain', 'Our Business Sponsors')
  })
})

export {}