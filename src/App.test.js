import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    // 通过debug来查看组件的HTML可见输出。
    const titleElement = screen.getByText(/Playground/i);
    expect(titleElement).toBeInTheDocument();
  });
});

