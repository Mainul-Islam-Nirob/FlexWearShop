// import { describe, it, expect, vi, beforeEach } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { BrowserRouter as Router } from "react-router-dom";
// import Shop from "../components/Shop";
// import * as CartContext from "../context/CartContext";

// // ✅ Mock product data directly inside the vi.mock factory
// vi.mock("../Products/Products", () => ({
//   default: Array.from({ length: 30 }, (_, i) => ({
//     id: i + 1,
//     name: `Product ${i + 1}`,
//     description: `Description for product ${i + 1}`,
//     price: (i + 1) * 10,
//     image: `https://placehold.co/300x300?text=Product+${i + 1}`,
//   })),
// }));

// // ✅ Mock the useCart hook
// const mockAddToCart = vi.fn();
// vi.spyOn(CartContext, "useCart").mockReturnValue({ addToCart: mockAddToCart });

// describe("Shop component", () => {
//   beforeEach(() => {
//     mockAddToCart.mockClear();
//   });

//   it("renders 20 products initially", () => {
//     render(
//       <Router>
//         <Shop />
//       </Router>
//     );

//     const productCards = screen.getAllByText(/Product \d+/);
//     expect(productCards.length).toBe(20);
//   });

//   it("loads more products when 'Load More' is clicked", async () => {
//     const user = userEvent.setup();

//     render(
//       <Router>
//         <Shop />
//       </Router>
//     );

//     const loadMoreBtn = screen.getByRole("button", { name: /load more/i });
//     await user.click(loadMoreBtn);

//     const productCards = screen.getAllByText(/Product \d+/);
//     expect(productCards.length).toBeGreaterThan(20);
//   });

//   it("calls addToCart when 'Add to Cart' is clicked", async () => {
//     const user = userEvent.setup();
//     render(
//       <Router>
//         <Shop />
//       </Router>
//     );

//     const addToCartButtons = screen.getAllByRole("button", {
//       name: /add to cart/i,
//     });

//     await user.click(addToCartButtons[0]);
//     expect(mockAddToCart).toHaveBeenCalled();
//   });

//   it("matches snapshot", () => {
//     const { container } = render(
//       <Router>
//         <Shop />
//       </Router>
//     );
//     expect(container).toMatchSnapshot();
//   });
// });

