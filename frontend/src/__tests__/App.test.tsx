import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    it('renders the welcome message', () => {
        render(<App />);
        expect(screen.getByText(/Regenerative Agriculture Dashboard/i)).toBeInTheDocument();
        expect(screen.getByText(/Welcome to the dashboard!/i)).toBeInTheDocument();
    });
});
