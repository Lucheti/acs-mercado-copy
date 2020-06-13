describe("wishlist to cart test", () => {

    beforeEach(() => {
        cy.visit("/")
        cy.wait(1000);
    });

    it('should add the first product from the description to the wishlist', () => {
        let name
        cy.get('.items > :nth-child(1)').click();
        cy.wait(1000);
        cy.get('.product-info > #product-name').then($name => {
            name = $name.text()
            cy.wait(1000);
            cy.get('[data-cy=add-to-wishlist]').click();
            cy.wait(1000);
            cy.get('[data-cy=go-to-wishlist]').click();
            cy.wait(1000);
            cy.get('[data-cy=empty-wishlist-message]').should("not.exist")
            cy.wait(1000);
            cy.get('[data-cy=wishlist-items-list]').should("exist")
            cy.wait(1000);
            cy.get('[data-cy=wishlist-items-list]').contains(name).should('exist')
            cy.wait(1000);
            cy.get('[data-cy=plus-one]').click();
            cy.wait(1000);
            cy.get('[data-cy=counter]').contains(1)
            cy.wait(1000);
            cy.get('[data-cy=add-product]').click();
            cy.wait(1000);
            cy.get('[data-cy=go-to-cart]').click();
            cy.wait(1000);
            cy.get('[data-cy=empty-cart-message]').should("not.exist")
            cy.wait(1000);
            cy.get('[data-cy=cart-items-list]').should("exist")
            cy.wait(1000);
            cy.get('[data-cy=cart-items-list]').contains(name).should('exist')
            cy.wait(1000);
            cy.get('[data-cy=product-quantity]').contains(1).should('exist')
            cy.wait(1000);
        });
    });

});
