import NotificationsViewer from '../NotificationsViewer'
import renderer from 'react-test-renderer'
import React from 'react'
import delay from 'redux-saga'

jest.mock('../../services/NotificationsService')

const notificationsService = require('../../services/NotificationsService').default;
describe('The notification viewer', () => {
    beforeAll(() => {
        console.log('before All')
        notificationsService.__setCount(5)
    })
    it('should display the correct number of notifications', async () => {
        const tree = renderer.create(<NotificationsViewer />)
        await delay();
        const instance = tree.root;
        console.log("Log: -----> : instance", instance)
        const component = instance.findByProps({ className: 'notifications' })
        console.log("Log: -----> : component", component)
        const text = component.children[0]
        console.log("Log: -----> : component.children", component.children)
        console.log("Log: -----> : text", text)
        expect(text).toEqual('5 Notifications Awaiting')
    })
})
