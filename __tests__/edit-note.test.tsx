import React from 'react';
import _ from 'lodash';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import { CreateNoteTextAreaTestId, EditNoteDoneButtonTestId, EditNoteTextAreaTestId, ModalCreateNoteTestId } from '../Constants';

const IAmNoteToBeEdited = "IAmNoteToBeEdited";
const IAmNoteEdited = IAmNoteToBeEdited + "ILoveCleanCodeAlways";

test(`note is actually edited upon edit`, async () => {
    render(<Home />);

    fireEvent.click(screen.getByRole('button', {
        name: /Create Note/i,
    }));

    await waitFor(() => screen.getByTestId(
        ModalCreateNoteTestId
    ));

    const textArea = screen.getByTestId(CreateNoteTextAreaTestId);
    fireEvent.change(textArea, { target: { value: IAmNoteToBeEdited } });

    expect(screen.getByTestId(ModalCreateNoteTestId)).toBeEnabled();

    fireEvent.click(screen.getByTestId(
        ModalCreateNoteTestId
    ));

    const newNote = screen.getAllByText(
        IAmNoteToBeEdited
    );

    expect(_.size(newNote)).toBeGreaterThan(1);

    const firstIndex = 0;
    fireEvent.click(screen.getAllByText(IAmNoteToBeEdited)[firstIndex]);

    const editTextArea = screen.getByTestId(EditNoteTextAreaTestId);
    fireEvent.change(editTextArea, { target: { value: IAmNoteEdited } });

    fireEvent.click(screen.getByTestId(EditNoteDoneButtonTestId));

    await waitFor(() => screen.getAllByText(
        IAmNoteEdited
    ));
    
    const updatedNotes = screen.getAllByText(
        IAmNoteEdited
    );

    expect(_.size(updatedNotes)).toBeGreaterThan(1);
})


