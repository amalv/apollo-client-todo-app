import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the component", () => {
  render(<App />);
  const element = screen.getByText("Vite + React");
  expect(element).toBeInTheDocument();
});
