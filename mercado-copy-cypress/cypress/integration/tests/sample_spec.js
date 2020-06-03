describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit("www.google.com")
    expect(true).to.equal(true)
  })
})