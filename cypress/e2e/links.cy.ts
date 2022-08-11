describe("Navigate Externally", () => {
    it('should get anchor tag for instagram', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')
    
        // Find a link to instagram
        cy.get('a[href*="https://www.instagram.com/adoptanmilbplayer/"]')
    })
})

export {}