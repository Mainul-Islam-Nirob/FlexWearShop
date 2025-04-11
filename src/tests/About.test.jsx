import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../components/About'; // adjust path if needed

describe('About component', () => {
  it('renders without crashing', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { name: /about flexwearshop/i });
    expect(heading).toBeInTheDocument();
  });

  it('displays all expected paragraphs', () => {
    render(<About />);
    
    expect(
      screen.getByText(/your one-stop destination for fashion/i)
    ).toBeInTheDocument();
    
    expect(
      screen.getByText(/express your personal style/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/premium fashion with a seamless shopping experience/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/look great and feel confident/i)
    ).toBeInTheDocument();
  });

  it('highlights "FlexWearShop" brand name in multiple places', () => {
    render(<About />);
    const brandMentions = screen.getAllByText(/FlexWearShop/i);
    expect(brandMentions.length).toBeGreaterThanOrEqual(2);
  });

  it('matches snapshot', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot(); // optional — useful if UI is stable
  });
});
