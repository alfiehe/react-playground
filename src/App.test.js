import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);

  // 通过debug来查看组件的HTML可见输出。
  screen.debug();
  
  const linkElement = screen.getByText(/Playground/i);
  expect(linkElement).toBeInTheDocument();
});
