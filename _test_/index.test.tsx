import React from 'react';
import {render} from '@testing-library/react';
import Home from "../pages";

test('Check that the home page renders',()=>{
    let home=render(<Home/>);
});