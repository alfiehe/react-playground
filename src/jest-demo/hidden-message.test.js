import '@testing-library/jest-dom';
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import HiddenMessage from './hidden-message';

describe('HiddenMessage 测试套件', () => {
  it('默认复选框未选中时，应不显示消息', () => {
    const testMessage = 'daiboy';
    render(<HiddenMessage>{testMessage}</HiddenMessage>);
    // query* 返回 element 或 null
    // get* 返回 element 或 throw error
    expect(screen.queryByText(/testMessage/i)).toBeNull();
  });
  it('点击复选框显示children内容', () => {
    const testMessage = 'daiboy';
    render(<HiddenMessage>{testMessage}</HiddenMessage>);
    fireEvent.click(screen.getByLabelText(/show/i));
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
