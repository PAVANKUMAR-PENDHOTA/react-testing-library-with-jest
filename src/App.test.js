import { render, screen } from '@testing-library/react';
import App from './App';

describe("Test the App Component", ()=>{
  test('header is render with react testing tutorial', () => {
    render(<App />);
    const linkElement = screen.getByText(/This is React Testing library/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('header is render with react testing tutorial', () => {
    render(<App />);
    const para = screen.getByText(/How to interact react testing library with jest/i);
    expect(para).toBeInTheDocument();
  });

  test('render login component in the document', ()=>{
    const { getByLabelText } = render(<App />);
    const childElement = getByLabelText("Email");
    expect(childElement).toBeTruthy(); 
  });
})
