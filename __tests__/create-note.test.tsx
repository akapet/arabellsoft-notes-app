import React from 'react';
import _ from 'lodash';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import { CreateNoteTextAreaTestId, ModalCreateNoteTestId } from '../Constants';

const IAmSampleNote = "IAmSampleNote";

test(`create note modal shows "Create" button as disabled upon load`, async () => {
    render(<Home />);

    fireEvent.click(screen.getByRole('button', {
        name: /Create Note/i,
    }));
    
    await waitFor(() => screen.getByTestId(
        ModalCreateNoteTestId
    ));

    expect(screen.getByTestId(ModalCreateNoteTestId)).toBeDisabled()
})

test(`create note modal enables the "Create" button upon text entered`, async () => {
    render(<Home />);

    fireEvent.click(screen.getByRole('button', {
        name: /Create Note/i,
    }));

    await waitFor(() => screen.getByTestId(
        ModalCreateNoteTestId
    ));

    const textArea = screen.getByTestId(CreateNoteTextAreaTestId);
    fireEvent.change(textArea, { target: { value: IAmSampleNote } });

    expect(screen.getByTestId(ModalCreateNoteTestId)).toBeEnabled()
})

test(`note is added to list upon note created`, async () => {
    render(<Home />);

    fireEvent.click(screen.getByRole('button', {
        name: /Create Note/i,
    }));

    await waitFor(() => screen.getByTestId(
        ModalCreateNoteTestId
    ));

    const textArea = screen.getByTestId(CreateNoteTextAreaTestId);
    fireEvent.change(textArea, { target: { value: IAmSampleNote } });

    expect(screen.getByTestId(ModalCreateNoteTestId)).toBeEnabled();

    fireEvent.click(screen.getByTestId(
        ModalCreateNoteTestId
    ));

    const newNote = screen.getAllByText(
        IAmSampleNote
    );

    expect(_.size(newNote)).toBeGreaterThan(1);
})


