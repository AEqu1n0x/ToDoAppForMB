import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import FilterButtons from "./FilterButtons";

/*
  Тесты проверяют:
  1. Корректность отображения счетчика
  2. Условный рендеринг кнопок
  3. Работу фильтрации и сброса
  4. Обработку граничных случаев
 */

describe("FilterButtons Component - Comprehensive Tests", () => {
  const mockProps = {
    todosCount: 5,
    completedCount: 2,
    onFilterChange: vi.fn(),
    onClearCompleted: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("correctly calculates and displays active items count", () => {
    const { rerender } = render(<FilterButtons {...mockProps} />);
    expect(screen.getByText("3 items left")).toBeInTheDocument();

    rerender(<FilterButtons {...mockProps} todosCount={10} completedCount={4} />);
    expect(screen.getByText("6 items left")).toBeInTheDocument();

    rerender(<FilterButtons {...mockProps} completedCount={0} />);
    expect(screen.getByText("5 items left")).toBeInTheDocument();
  });

  it("renders all mandatory buttons and conditionally renders others", () => {
    const { rerender } = render(<FilterButtons {...mockProps} />);

    expect(screen.getByTestId("filter-all")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Clear completed")).toBeInTheDocument();
    rerender(<FilterButtons {...mockProps} completedCount={0} />);
    expect(screen.queryByText("Active")).not.toBeInTheDocument();
    expect(screen.queryByText("Completed")).not.toBeInTheDocument();
    expect(screen.queryByText("Clear completed")).not.toBeInTheDocument();
  });

  it("correctly handles filter selection and visual feedback", () => {
    render(<FilterButtons {...mockProps} />);

    const allButton = screen.getByTestId("filter-all");
    const activeButton = screen.getByText("Active");
    const completedButton = screen.getByText("Completed");

    expect(allButton).toHaveClass("active");
    expect(activeButton).not.toHaveClass("active");
    expect(completedButton).not.toHaveClass("active");

    fireEvent.click(activeButton);
    expect(mockProps.onFilterChange).toHaveBeenCalledWith("active");

    fireEvent.click(completedButton);
    expect(mockProps.onFilterChange).toHaveBeenCalledWith("completed");

    fireEvent.click(allButton);
    expect(mockProps.onFilterChange).toHaveBeenCalledWith("all");
  });

  it("handles clear completed action correctly", () => {
    render(<FilterButtons {...mockProps} />);

    fireEvent.click(screen.getByText("Clear completed"));

    expect(mockProps.onClearCompleted).toHaveBeenCalledTimes(1);
    expect(mockProps.onFilterChange).toHaveBeenCalledWith("all");
    expect(screen.getByTestId("filter-all")).toHaveClass("active");
  });

  it("maintains consistent behavior with edge cases", () => {
    const { rerender } = render(<FilterButtons {...mockProps} todosCount={0} completedCount={0} />);
    expect(screen.getByText("0 items left")).toBeInTheDocument();
    expect(screen.queryByText("Clear completed")).not.toBeInTheDocument();

    rerender(<FilterButtons {...mockProps} todosCount={5} completedCount={5} />);
    expect(screen.getByText("0 items left")).toBeInTheDocument();
    expect(screen.getByText("Clear completed")).toBeInTheDocument();
  });
});
