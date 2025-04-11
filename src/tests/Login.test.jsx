// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { MemoryRouter } from 'react-router-dom';
// import { describe, it, expect } from 'vitest';
// import Login from '../components/Login';

// describe('Login component', () => {
//   it('renders the login form elements correctly', () => {
//     render(
//       <MemoryRouter>
//         <Login />
//       </MemoryRouter>
//     );

//     // Check heading
//     expect(screen.getByRole('heading', { name: /login to flexwearshop/i })).toBeInTheDocument();

//     // Check email field
//     expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

//     // Check password field
//     expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

//     // Check login button
//     expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();

//     // Check "Go back to Home" link
//     expect(screen.getByRole('link', { name: /go back to home/i })).toBeInTheDocument();

//     // Check "Sign Up" link
//     expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
//   });

//   it('allows user to type in email and password fields', async () => {
//     render(
//       <MemoryRouter>
//         <Login />
//       </MemoryRouter>
//     );

//     const emailInput = screen.getByLabelText(/email/i);
//     const passwordInput = screen.getByLabelText(/password/i);

//     await userEvent.type(emailInput, 'test@example.com');
//     await userEvent.type(passwordInput, 'password123');

//     expect(emailInput).toHaveValue('test@example.com');
//     expect(passwordInput).toHaveValue('password123');
//   });

//   it('does not crash on form submission (basic submit test)', async () => {
//     render(
//       <MemoryRouter>
//         <Login />
//       </MemoryRouter>
//     );

//     const button = screen.getByRole('button', { name: /log in/i });
//     await userEvent.click(button);

//     // Since there's no onSubmit logic, just check it doesn't crash
//     expect(button).toBeInTheDocument();
//   });
// });
