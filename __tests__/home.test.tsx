import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
    it('should render the heading', () => {
        render(<Home />)

        const heading = screen.getByText(
            /Note App/i,
        );

        expect(heading).toBeInTheDocument();
    })
})

describe('Home', () => {
    it(`should render "Create Note" button`, () => {
        render(<Home />)

        const createNote = screen.getByRole('button', {
                name: /Create Note/i,
            }
        );

        expect(createNote).toBeInTheDocument();
    })
})