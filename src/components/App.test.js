import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('Renders correctly', () => {
    expect(app).toMatchSnapshot();
});

it('Initializes the state with an empty list of gifts', ()=>{
    expect(app.state().gifts).toEqual([]);
})