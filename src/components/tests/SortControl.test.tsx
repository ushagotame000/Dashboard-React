import { render, screen, fireEvent } from "@testing-library/react";
import SortControl from "../SortControl"; 
import { describe, it, expect, vi } from "vitest";

describe("SortControl Component", () => {
  const onSortKeyChange = vi.fn();

  beforeEach(() => {
    onSortKeyChange.mockClear();
  });

  it("renders with initial sort key", () => {
    render(<SortControl sortKey="name" onSortKeyChange={onSortKeyChange} />);
    
    const select = screen.getByRole("combobox") as HTMLSelectElement;
    expect(select.value).toBe("name");
    
    expect(screen.getByText("Sort by Id")).toBeInTheDocument();
    expect(screen.getByText("Sort by Name")).toBeInTheDocument();
    expect(screen.getByText("Sort by Email")).toBeInTheDocument();
    expect(screen.getByText("Sort by Username")).toBeInTheDocument();
  });

  it("calls onSortKeyChange when a new option is selected", () => {
    render(<SortControl sortKey="name" onSortKeyChange={onSortKeyChange} />);
    
    const select = screen.getByRole("combobox") as HTMLSelectElement;

    fireEvent.change(select, { target: { value: "email" } });
    expect(onSortKeyChange).toHaveBeenCalledWith("email");

    fireEvent.change(select, { target: { value: "id" } });
    expect(onSortKeyChange).toHaveBeenCalledWith("id");
  });
});
