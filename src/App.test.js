import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); 

// vscode://vscode.github-authentication/did-authenticate?windowid=1&code=a93755da238e8d720544&state=78ca718c-4394-435b-a3fc-9d1b2de81513
// vscode://vscode.github-authentication/did-authenticate?windowid=1&code=a93755da238e8d720544&state=78ca718c-4394-435b-a3fc-9d1b2de81513
// jknbkb
// MediaDeviceInf