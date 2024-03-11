/// <reference types="cypress" />

context('Component accordion', () => {
    beforeEach(() => {
        cy.visit('../../app/lightbox.html');
    })

    it('show the pic on click', () => {
        // Show content
        cy.get('[data-cy=img]').click()
        cy.get('[data-cy=lightbox-content]').scrollIntoView().should('be.visible')

        cy.get('[data-cy=lightbox-content').click()
        cy.get('body').click(0,0)
        cy.get('[data-cy=lightbox-content]').scrollIntoView().should('not.be.visible')

        cy.get('[data-cy=img]').click()
        cy.get('[data-cy=likebtn]').click()
        cy.get('[data-cy=likeCount]').should('have.text', '1')
        cy.get('[data-cy=unlikebtn]').click()
        cy.get('[data-cy=likeCount]').should('have.text', '0')

        cy.get('[data-cy=comment]').type('Cypress c est zinzin')
        cy.get('[data-cy=publish').click()
        cy.get('[data-cy=comment-content]').should('have.text', 'Cypress c est zinzin')
        cy.get('[data-cy=publish').should('be.disabled')
        cy.get('[data-cy=hide-comment').click()
        cy.get('[data-cy=comment').should('be.visible')

        
        // cy.wait(2000)
        // cy.get('.relative').click({force: true})
        // cy.get('[data-cy=lightbox-content').scrollIntoView().should('not.be.visible')

    })
})