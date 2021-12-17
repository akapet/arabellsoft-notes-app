import React from 'react';
import _ from 'lodash';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import { ModalCreateNoteTestId } from '../Constants';

const IAmNoteToBeEdited = "IAmNoteToBeEdited";

test(`note is added to list upon note created`, async () => {
    render(<Home />);

    fireEvent.click(screen.getByRole('button', {
        name: /Create Note/i,
    }));

    await waitFor(() => screen.getByTestId(
        ModalCreateNoteTestId
    ));

    const textArea = screen.getByTestId("create-note-textarea");
    fireEvent.change(textArea, { target: { value: IAmNoteToBeEdited } });

    expect(screen.getByTestId(ModalCreateNoteTestId)).toBeEnabled();

    fireEvent.click(screen.getByTestId(
        ModalCreateNoteTestId
    ));

    const newNote = screen.getAllByText(
        IAmNoteToBeEdited
    );

    expect(_.size(newNote)).toBeGreaterThan(1);
})


