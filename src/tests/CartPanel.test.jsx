// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { describe, it, expect, vi, beforeEach } from 'vitest';
// import CartPanel from '../components/CartPanel';

// // Mock cart context
// vi.mock('../context/CartContext', () => ({
//   useCart: () => ({
//     cartItems: [
//       {
//         id: 1,
//         name: 'Test Product',
//         price: 200,
//         quantity: 2,
//         image: 'https://via.placeholder.com/150'
//       }
//     ],
//     updateQuantity: vi.fn(),
//     removeFromCart: vi.fn(),
//   }),
// }));

// describe('CartPanel component', () => {
//   const onClose = vi.fn();

//   const setup = (isOpen = true) => {
//     return render(
//       <MemoryRouter>
//         <CartPanel isOpen={isOpen} onClose={onClose} />
//       </MemoryRouter>
//     );
//   };

//   it('renders when open', () => {
//     setup(true);
//     expect(screen.getByText(/your cart/i)).toBeInTheDocument();
//   });

//   it('hides when closed', () => {
//     setup(false);
//     const panel = screen.getByRole('complementary');
//     expect(panel.className).toContain('translate-x-full');
//   });

//   it('displays cart item details', () => {
//     setup();
//     expect(screen.getByText(/test product/i)).toBeInTheDocument();
//     expect(screen.getByText(/৳ 200 x 2/)).toBeInTheDocument();
//   });

//   it('calculates subtotal, tax, and total correctly', () => {
//     setup();
//     expect(screen.getByText(/৳ 400.00/)).toBeInTheDocument(); // subtotal
//     expect(screen.getByText(/৳ 30.00/)).toBeInTheDocument();  // tax
//     expect(screen.getByText(/৳ 430.00/)).toBeInTheDocument(); // total
//   });

//   it('calls onClose when close button is clicked', () => {
//     setup();
//     const closeButton = screen.getByRole('button', { name: '' }); // X icon has no label
//     fireEvent.click(closeButton);
//     expect(onClose).toHaveBeenCalled();
//   });

//   it('calls updateQuantity when +/- is clicked', () => {
//     const { updateQuantity } = require('../context/CartContext').useCart();
//     setup();

//     const plusBtn = screen.getAllByRole('button', { name: '+' })[0];
//     fireEvent.click(plusBtn);
//     expect(updateQuantity).toHaveBeenCalledWith(1, 3);

//     const minusBtn = screen.getAllByRole('button', { name: '−' })[0];
//     fireEvent.click(minusBtn);
//     expect(updateQuantity).toHaveBeenCalledWith(1, 1);
//   });

//   it('calls removeFromCart when trash icon is clicked', () => {
//     const { removeFromCart } = require('../context/CartContext').useCart();
//     setup();

//     const trashButton = screen.getByRole('button', { name: '' }); // Trash icon also has no label
//     fireEvent.click(trashButton);
//     expect(removeFromCart).toHaveBeenCalledWith(1);
//   });

//   it('calls onClose when "Go to Checkout" button is clicked', () => {
//     setup();
//     const checkoutButton = screen.getByRole('button', { name: /go to checkout/i });
//     fireEvent.click(checkoutButton);
//     expect(onClose).toHaveBeenCalled();
//   });
// });
