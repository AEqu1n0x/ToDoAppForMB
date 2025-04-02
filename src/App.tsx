import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  StyledH1,
  StyledMainContent,
  StyledMain,
  StyledBottomContent1,
  StyledBottomContent2,
  StyledP,
} from "./App.styles";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import { TTodo, TFilterType } from "./types/types";

/*
  Главный компонент приложения Todo:
  - Управляет состоянием задач и фильтрацией
  - Содержит форму добавления и список задач
  - Обрабатывает добавление/изменение/удаление задач
  - Контролирует отображение скрытых задач
 */

function App() {
  const [visibleTodos, setVisibleTodos] = useState(true);
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [filter, setFilter] = useState<TFilterType>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true;
  });

  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  const handleAddTodo = (text: string) => {
    const newTodo: TTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  return (
    <StyledMain>
      <StyledH1>todos</StyledH1>
      <StyledMainContent>
        <ToDoForm onAddTodo={handleAddTodo} setVisibleTodos={setVisibleTodos} />
        {visibleTodos ? (
          <>
            {todos.length === 0 ? (
              <StyledP>Nothing here</StyledP>
            ) : (
              <>
                <ToDoList todos={filteredTodos} onToggle={toggleTodo} />
                <FilterButtons
                  todosCount={todos.length}
                  completedCount={completedCount}
                  onFilterChange={setFilter}
                  onClearCompleted={clearCompleted}
                  currentFilter={filter}
                />
              </>
            )}
          </>
        ) : (
          <StyledP>the list is hidden</StyledP>
        )}
      </StyledMainContent>
      <StyledBottomContent1 />
      <StyledBottomContent2 />
    </StyledMain>
  );
}

export default App;
