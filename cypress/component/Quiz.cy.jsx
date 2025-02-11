// import pretty from 'pretty';
import Quiz from '../../client/src/components/Quiz'

describe('Quiz', () => {
    it('should contain a button which reads Start Quiz', () => {
        cy.mount(<Quiz />);
        cy.get('button').should('be.visible');
        cy.get('button').should('have.text', 'Start Quiz');
    })
})