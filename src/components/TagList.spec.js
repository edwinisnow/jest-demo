import React from 'react'
import TagsLists from './TagsList'
import renderer from 'react-test-renderer'

describe("The tags list", () => {
    it('renders as expected', () => {
        const tree = renderer.create(<TagsLists tags={['css', 'html', 'js']} />).toJSON()
        console.log("Log: -----> : tree", tree)
        expect(tree).toMatchSnapshot()
    })
})