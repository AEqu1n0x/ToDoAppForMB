import { useState } from "react";
import { FilterContainer, FilterButton, ClearButton } from "./FilterButtons.styles";
import { TFilterType } from "../../types/types";

/*
  Панель фильтров задач: отображает количество активных задач,
  кнопки фильтрации (All/Active/Completed) и очистки выполненных
  Управляет состоянием фильтрации и вызывает колбэки при изменениях
 */

type Props = {
  todosCount: number;
  completedCount: number;
  onFilterChange: (filter: TFilterType) => void;
  onClearCompleted: () => void;
};

const FilterButtons = ({ todosCount, completedCount, onFilterChange, onClearCompleted }: Props) => {
  const [activeFilter, setActiveFilter] = useState<TFilterType>("all");

  const activeCount = todosCount - completedCount;

  const handleFilterClick = (filter: TFilterType) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const handleClearCompleted = () => {
    onClearCompleted();
    setActiveFilter("all");
    onFilterChange("all");
  };

  return (
    <FilterContainer>
      <span>{activeCount} items left</span>

      <div>
        <FilterButton
          $active={activeFilter === "all"}
          onClick={() => handleFilterClick("all")}
          className={activeFilter === "all" ? "active" : ""}
          data-testid="filter-all"
        >
          All
        </FilterButton>
        {completedCount > 0 && (
          <>
            <FilterButton
              $active={activeFilter === "active"}
              onClick={() => handleFilterClick("active")}
            >
              Active
            </FilterButton>
            <FilterButton
              $active={activeFilter === "completed"}
              onClick={() => handleFilterClick("completed")}
            >
              Completed
            </FilterButton>
          </>
        )}
      </div>
      {completedCount > 0 && (
        <ClearButton onClick={handleClearCompleted}>Clear completed</ClearButton>
      )}
    </FilterContainer>
  );
};

export default FilterButtons;
