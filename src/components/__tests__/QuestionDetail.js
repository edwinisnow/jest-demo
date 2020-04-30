import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import React from 'react'
import renderer from 'react-test-renderer'
describe('The Question Detail Component', () => {
    describe('The Container Element', () => {
        describe('mapStateToProps', () => {
            it('should map the state to props correctly', () => {
                const sampleQuestion = { question_id: 42, body: 'Space is big' }
                const appState = { questions: [sampleQuestion] }

                const ownProps = { question_id: 42 }
                const componentState = mapStateToProps(appState, ownProps)
                console.log("Log: -----> : componentState", componentState)
                expect(componentState).toEqual(sampleQuestion)
            })
        })

    })

    describe('The display element', () => {
        it('should not regress', () => {
            const tree = renderer.create(
                <QuestionDetailDisplay title="The meaning of life" body="43" answer_count={0} tags={['hitch']} />)

            expect(tree.toJSON()).toMatchSnapshot()
        })
    })



    it('should not regress', () => {

    })
})