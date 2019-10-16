import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';

describe.skip('test with testing library', () => {
  it('shows the children when the checkbox is checked', () => {
    const testMessage = 'Do some math,Buddy';
    const { queryByText, getByLabelText, getByText } = render(
      <Calculator />,
    );

    expect(queryByText(testMessage)).toBeInTheDocument();
  });

  it('does math', () => {
    const { queryByPlaceholderText, getByText, queryByTestId } = render(
      <Calculator />,
    );

    const firstInput = queryByPlaceholderText('First Number');
    const secondInput = queryByPlaceholderText('Second Number');
    const addBtn = getByText('+');
    userEvent.type(firstInput, '2');
    userEvent.type(secondInput, '3');
    expect(firstInput).toHaveAttribute('value', '2');
    fireEvent.click(addBtn);

    const result = queryByTestId('result');

    expect(result).toHaveTextContent('5');
  });
});
