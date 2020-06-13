describe("wishlist test", () => {

    beforeEach(() => {
        cy.visit("/")
        // cy.wait(1000);
    });

    it('should be empty if a user is not logged in', () => {
        cy.visit("/wishlist")
        // cy.wait(1000);
        cy.get('[data-cy=wishlist-items-list]').should("not.exist")
        // cy.wait(1000);
        cy.get('[data-cy=empty-wishlist-message]').should("exist")
        // cy.wait(1000);
        cy.get('[data-cy=reset-wishlist]').should("not.exist")
        // cy.wait(1000);
    });

    it('should add the first product from the description to the wishlist', () => {
        let name
        cy.get('.items > :nth-child(1)').click();
        // cy.wait(1000);
        cy.get('.product-info > #product-name').then($name => {
            name = $name.text()
            // cy.wait(1000);
            cy.get('[data-cy=add-to-wishlist]').click();
            // cy.wait(1000);
            cy.get('[data-cy=go-to-wishlist]').click();
            // cy.wait(1000);
            cy.get('[data-cy=empty-wishlist-message]').should("not.exist")
            // cy.wait(1000);
            cy.get('[data-cy=wishlist-items-list]').should("exist")
            // cy.wait(1000);
            cy.get('[data-cy=wishlist-items-list]').contains(name).should('exist')
            // cy.wait(1000);
        });
    });

    it('should add the first product from the home to the wishlist', () => {
        let name
        cy.get(':nth-child(1) > a > .product-details > #product-name').then($name => {
            name = $name.text()
            // cy.wait(1000);
            cy.get('[data-cy=add-product-to-wishlist]').first().click();
            // cy.wait(1000);
            cy.get('[data-cy=go-to-wishlist]').click();
            // cy.wait(1000);
            cy.get('[data-cy=empty-wishlist-message]').should("not.exist")
            // cy.wait(1000);
            cy.get('[data-cy=wishlist-items-list]').should("exist")
            // cy.wait(1000);
            cy.get('[data-cy=wishlist-items-list]').contains(name).should('exist')
            // cy.wait(1000);
        });
    });

    it('should remove the first product added to the wishlist from the home screen', () => {
        let name
        cy.get(':nth-child(1) > a > .product-details > #product-name').then($name => {
            name = $name.text()
            // cy.wait(1000);
            cy.get('[data-cy=add-product-to-wishlist]').first().click();
            // cy.wait(1000);
            cy.get('[data-cy=go-to-wishlist]').click();
            // cy.wait(1000);
            cy.get('[data-cy=empty-wishlist-message]').should("not.exist")
            // cy.wait(1000);
            cy.get('[data-cy=wishlist-items-list]').should("exist")
            // cy.wait(1000);
            cy.get('[data-cy=wishlist-items-list]').contains(name).should('exist')
            // cy.wait(1000);
            cy.get('[data-cy=remove-from-wishlist]').first().click();
            // cy.wait(1000);
            cy.get('[data-cy=empty-wishlist-message]').should("exist")
            // cy.wait(1000);
            cy.get('[data-cy=wishlist-items-list]').should("not.exist")
            // cy.wait(1000);
            cy.get('[data-cy=reset-wishlist]').should("not.exist")
        });
    });

    it('should clear all the products in the wishlist', () => {
        cy.get('.items > :nth-child(1)').click();
        // cy.wait(1000);
        cy.get('[data-cy=add-to-wishlist]').click();
        // cy.wait(1000);
        cy.get('[data-cy=go-to-wishlist]').click();
        // cy.wait(1000);
        cy.get('[data-cy=empty-wishlist-message]').should("not.exist")
        // cy.wait(1000);
        cy.get('[data-cy=wishlist-items-list]').should("exist")
        // cy.wait(1000);
        cy.get('[data-cy=reset-wishlist]').should("exist")
        // cy.wait(1000);
        cy.get('[data-cy=reset-wishlist]').click()
        // cy.wait(1000);
        cy.get('[data-cy=empty-wishlist-message]').should("exist")
        // cy.wait(1000);
        cy.get('[data-cy=wishlist-items-list]').should("not.exist")
        // cy.wait(1000);
        cy.get('[data-cy=reset-wishlist]').should("not.exist")
    });

});
