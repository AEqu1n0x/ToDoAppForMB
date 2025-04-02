import {
  StyledFilterContainer,
  StyledFilterButton,
  StyledClearButton,
} from "./FilterButtons.styles";
import { TFilterType } from "../../types/types";

/*
  Панель фильтров задач: отображает количество активных задач,
  кнопки фильтрации (All/Active/Completed) и очистки выполненных
  Управляет состоянием фильтрации и вызывает колбэки при изменениях
 */

type Props = {
  todosCount: number;
  completedCount: number;
  currentFilter: TFilterType;
  onFilterChange: (filter: TFilterType) => void;
  onClearCompleted: () => void;
};

const FilterButtons = ({
  todosCount,
  completedCount,
  onFilterChange,
  onClearCompleted,
  currentFilter,
}: Props) => {
  const activeCount = todosCount - completedCount;

  const handleFilterClick = (filter: TFilterType) => {
    onFilterChange(filter);
  };

  const handleClearCompleted = () => {
    onClearCompleted();
    onFilterChange("all");
  };

  return (
    <StyledFilterContainer>
      <span>{activeCount} items left</span>

      <div>
        <StyledFilterButton
          $active={currentFilter === "all"}
          onClick={() => handleFilterClick("all")}
          data-testid="filter-all"
          data-active={currentFilter === "all"}
        >
          All
        </StyledFilterButton>
        <StyledFilterButton
          $active={currentFilter === "active"}
          onClick={() => handleFilterClick("active")}
          data-active={currentFilter === "active"}
        >
          Active
        </StyledFilterButton>
        <StyledFilterButton
          $active={currentFilter === "completed"}
          onClick={() => handleFilterClick("completed")}
          data-active={currentFilter === "completed"}
        >
          Completed
        </StyledFilterButton>
      </div>
      {completedCount > 0 && (
        <StyledClearButton onClick={handleClearCompleted}>Clear completed</StyledClearButton>
      )}
    </StyledFilterContainer>
  );
};

export default FilterButtons;
