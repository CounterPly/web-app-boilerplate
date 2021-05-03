import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

it('should render frontend text', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/Here is our new feature!/i);
    expect(linkElement).toHaveTextContent(/Here is our new feature!/i)
});

