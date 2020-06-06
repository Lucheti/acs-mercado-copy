describe("cart test", () => {

    beforeEach(() => {
        cy.visit("/")
        cy.wait(1000);
    });

    it('should be empty if a user is not logged in', () => {
        cy.visit("/cart")
        cy.wait(1000);
        cy.get('[data-cy=cart-items-list]').should("not.exist")
        cy.wait(1000);
        cy.get('[data-cy=empty-cart-message]').should("exist")
        cy.wait(1000);
        cy.get('[data-cy=reset-cart]').should("not.exist")
        cy.wait(1000);
    });

    it('should add the first product from the description to the cart', () => {
        let name
        cy.get('.items > :nth-child(1)').click();
        cy.wait(1000);
        cy.get('.product-info > #product-name').then($name => {
            name = $name.text()
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
        });
    });

    it('should add the first product from the home to the cart', () => {
        let name
        cy.get(':nth-child(1) > a > .product-details > #product-name').then($name => {
            name = $name.text()
            cy.wait(1000);
            cy.get('[data-cy=add-product-to-cart]').first().click();
            cy.wait(1000);
            cy.get('[data-cy=go-to-cart]').click();
            cy.wait(1000);
            cy.get('[data-cy=empty-cart-message]').should("not.exist")
            cy.wait(1000);
            cy.get('[data-cy=cart-items-list]').should("exist")
            cy.wait(1000);
            cy.get('[data-cy=cart-items-list]').contains(name).should('exist')
            cy.wait(1000);
        });
    });

    it('should remove the first product added to the cart from the home screen', () => {
        let name
        cy.get(':nth-child(1) > a > .product-details > #product-name').then($name => {
            name = $name.text()
            cy.wait(1000);
            cy.get('[data-cy=add-product-to-cart]').first().click();
            cy.wait(1000);
            cy.get('[data-cy=go-to-cart]').click();
            cy.wait(1000);
            cy.get('[data-cy=empty-cart-message]').should("not.exist")
            cy.wait(1000);
            cy.get('[data-cy=cart-items-list]').should("exist")
            cy.wait(1000);
            cy.get('[data-cy=cart-items-list]').contains(name).should('exist')
            cy.wait(1000);
            cy.get('[data-cy=remove-from-cart]').first().click();
            cy.wait(1000);
            cy.get('[data-cy=empty-cart-message]').should("exist")
            cy.wait(1000);
            cy.get('[data-cy=cart-items-list]').should("not.exist")
            cy.wait(1000);
            cy.get('[data-cy=reset-cart]').should("not.exist")
        });
    });

    it('should clear all the products in the cart', () => {
        cy.get('.items > :nth-child(1)').click();
        cy.wait(1000);
        cy.get('[data-cy=add-product]').click();
        cy.wait(1000);
        cy.get('[data-cy=go-to-cart]').click();
        cy.wait(1000);
        cy.get('[data-cy=empty-cart-message]').should("not.exist")
        cy.wait(1000);
        cy.get('[data-cy=cart-items-list]').should("exist")
        cy.wait(1000);
        cy.get('[data-cy=reset-cart]').should("exist")
        cy.wait(1000);
        cy.get('[data-cy=reset-cart]').click()
        cy.wait(1000);
        cy.get('[data-cy=empty-cart-message]').should("exist")
        cy.wait(1000);
        cy.get('[data-cy=cart-items-list]').should("not.exist")
        cy.wait(1000);
        cy.get('[data-cy=reset-cart]').should("not.exist")
    });

});
