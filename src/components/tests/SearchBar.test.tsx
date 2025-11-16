import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  it("renders input with value and updates on change", () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);

    const input = screen.getByPlaceholderText(/search users/i);
    fireEvent.change(input, { target: { value: "Usha" } });
    expect(onChange).toHaveBeenCalledWith("Usha");
  });

  it("clear button clears input", () => {
    const onChange = vi.fn();
    render(<SearchBar value="Test" onChange={onChange} />);

    const button = screen.getByText("X");
    fireEvent.click(button);
    expect(onChange).toHaveBeenCalledWith("");
  });
});
