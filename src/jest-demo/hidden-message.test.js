import '@testing-library/jest-dom';
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import HiddenMessage from './hidden-message';

it('点击复选框显示children内容', () => {
  const testMessage = 'Test Message';
  render(<HiddenMessage>{testMessage}</HiddenMessage>);

  // query* 返回 element 或 null
  // get* 返回 element 或 throw error
  expect(screen.queryByText(testMessage)).toBeNull();

  // 点击 label 含 show 的节点
  fireEvent.click(screen.getByLabelText(/show/i));
  expect(screen.getByText(testMessage)).toBeInTheDocument();
});