import React from 'react';
import _ from 'lodash';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/index';

const ModalCreateNote = 'modal-create-note';
const IAmSampleNote = "IAmSampleNote";

test(`create note modal shows "Create" button as disabled upon load`, async () => {
    render(<Home />);

    fireEvent.click(screen.getByRole('button', {
        name: /Create Note/i,
    }));
    
    await waitFor(() => screen.getByTestId(
        ModalCreateNote
    ));

    expect(screen.getByTestId(ModalCreateNote)).toBeDisabled()
})

test(`create note modal enables the "Create" button upon text entered`, async () => {
    render(<Home />);

    fireEvent.click(screen.getByRole('button', {
        name: /Create Note/i,
    }));

    await waitFor(() => screen.getByTestId(
        ModalCreateNote
    ));

    const textArea = screen.getByTestId("create-note-textarea");
    fireEvent.change(textArea, { target: { value: IAmSampleNote } });

    expect(screen.getByTestId(ModalCreateNote)).toBeEnabled()
})

test(`note is added to list upon note created`, async () => {
    const {debug} = render(<Home />);

    fireEvent.click(screen.getByRole('button', {
        name: /Create Note/i,
    }));

    await waitFor(() => screen.getByTestId(
        ModalCreateNote
    ));

    const textArea = screen.getByTestId("create-note-textarea");
    fireEvent.change(textArea, { target: { value: IAmSampleNote } });

    expect(screen.getByTestId(ModalCreateNote)).toBeEnabled();

    fireEvent.click(screen.getByTestId(
        ModalCreateNote
    ));

    const newNote = screen.getAllByText(
        IAmSampleNote
    );

    expect(_.size(newNote)).toBeGreaterThan(1);
})


