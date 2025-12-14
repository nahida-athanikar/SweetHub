import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import App from "./App";
import StoreContextProvider from "./Context/StoreContext";


// ✅ Mock axios
vi.mock("axios", () => ({
  default: {
    get: vi.fn(() =>
      Promise.resolve({ data: { data: [] } })
    )
  }
}));

const mockStore = {
  getTotalCartAmount: () => 0,
  token: null,
  setToken: () => {},
  sweet_list: [],
  category: "All",
  setCategory: () => {}
};

test("App layout renders Navbar, Home page and Footer", () => {
  render(
    <StoreContextProvider value={mockStore}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </StoreContextProvider>
  );

  // Navbar Home link
  expect(
    screen.getByRole("link", { name: /home/i })
 ).toBeTruthy();

  // Main section
  expect(
    screen.getByText(/order your favourite sweets/i)
 ).toBeTruthy();

  // Footer
  expect(
    screen.getByText(/contact us/i)
 ).toBeTruthy();
});