import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    it('renders the welcome message', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: /Regenerative Agriculture Dashboard/i })).toBeInTheDocument();
        expect(screen.getByText(/Welcome to the regenerative agriculture dashboard!/i)).toBeInTheDocument();
    });
});
