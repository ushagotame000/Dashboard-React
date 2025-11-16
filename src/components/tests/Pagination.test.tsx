import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination"; 
import { describe, it, expect, vi } from "vitest";

describe("Pagination Component", () => {
  const onPageChange = vi.fn();

  beforeEach(() => {
    onPageChange.mockClear();
  });

  it("renders correct number of page buttons", () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />);
    
    //  buttons
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    
    // prevand next 
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("disables Prev button on first page and Next on last page", () => {
    const { rerender } = render(<Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />);
    expect(screen.getByText("Prev")).toBeDisabled();
    expect(screen.getByText("Next")).not.toBeDisabled();

    rerender(<Pagination currentPage={3} totalPages={3} onPageChange={onPageChange} />);
    expect(screen.getByText("Prev")).not.toBeDisabled();
    expect(screen.getByText("Next")).toBeDisabled();
  });

  it("calls onPageChange with correct page when page buttons are clicked", () => {
    render(<Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />);
    
    fireEvent.click(screen.getByText("Prev"));
    expect(onPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText("Next"));
    expect(onPageChange).toHaveBeenCalledWith(3);

    fireEvent.click(screen.getByText("1"));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it("highlights the current page", () => {
    render(<Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />);
    const currentButton = screen.getByText("2");
    expect(currentButton).toHaveClass("bg-blue-500 text-white");
  });
});
