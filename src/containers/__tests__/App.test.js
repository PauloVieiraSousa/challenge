import React from 'react';
import { shallow } from 'enzyme';

import App from 'containers/App/App';

let wrapped;

beforeEach( () => {
    wrapped = shallow( <App /> );
})

it('Sample Test', () => {
    expect(wrapped.find(App).length).toEqual(0);
});

