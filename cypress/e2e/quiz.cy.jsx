describe('Tech Quiz Website', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/');
    });

    it('should display a button reading Start Quiz', () => {
        cy.visit('http://localhost:3001/');
        cy.get('button').should('be.visible');
    })
    
    it('should begin the quiz when the button is clicked', () => {
        cy.get('button').click();
        cy.get('.card').should('be.visible');
    })
})