import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import FilterButtons from "./FilterButtons";
import type { TFilterType } from "../../types/types";

describe("FilterButtons Component", () => {
  const mockProps = {
    todosCount: 5,
    completedCount: 2,
    currentFilter: "all" as TFilterType,
    onFilterChange: vi.fn(),
    onClearCompleted: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders active items count correctly", () => {
    render(<FilterButtons {...mockProps} />);
    expect(screen.getByText("3 items left")).toBeInTheDocument();
  });

  it("renders all filter buttons with correct active state", () => {
    const { rerender } = render(<FilterButtons {...mockProps} />);
    
    expect(screen.getByTestId("filter-all")).toHaveAttribute('data-active', 'true');
    
    expect(screen.getByText("Active")).toHaveAttribute('data-active', 'false');
    expect(screen.getByText("Completed")).toHaveAttribute('data-active', 'false');

    rerender(<FilterButtons {...mockProps} currentFilter="active" />);
    expect(screen.getByText("Active")).toHaveAttribute('data-active', 'true');
  });

  it("calls onFilterChange with correct filter when button clicked", () => {
    render(<FilterButtons {...mockProps} />);
    
    fireEvent.click(screen.getByText("Active"));
    expect(mockProps.onFilterChange).toHaveBeenCalledWith("active");
    
    fireEvent.click(screen.getByText("Completed"));
    expect(mockProps.onFilterChange).toHaveBeenCalledWith("completed");
  });

  it("handles clear completed action correctly", () => {
    render(<FilterButtons {...mockProps} />);
    fireEvent.click(screen.getByText("Clear completed"));
    expect(mockProps.onClearCompleted).toHaveBeenCalled();
  });

  it("conditionally renders buttons based on completedCount", () => {
    const { rerender } = render(<FilterButtons {...mockProps} completedCount={0} />);
    expect(screen.queryByText("Clear completed")).not.toBeInTheDocument();
    
    rerender(<FilterButtons {...mockProps} completedCount={1} />);
    expect(screen.getByText("Clear completed")).toBeInTheDocument();
  });
});