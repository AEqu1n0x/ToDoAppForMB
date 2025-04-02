import { TTodo } from "../../types/types";
import {
  StyledListContainer,
  StyledTodoItem,
  StyledTodoCheckWrapper,
  StyledCheckIcon,
  StyledTodoText,
} from "./ToDoList.styles";

/*
  Компонент отображает список задач с:
  - Анимацией появления элементов
  - Чекбоксами для отметки выполнения
  - Перечеркиванием выполненых задач
  - Обработкой кликов для изменения статуса
 */

type Props = {
  todos: TTodo[];
  onToggle?: (id: string) => void;
};

const ToDoList = ({ todos, onToggle }: Props) => {
  return (
    <StyledListContainer>
      {todos.map((todo, index) => (
        <StyledTodoItem
          key={todo.id}
          style={{ animationDelay: `${index * 0.05}s` }}
          onClick={() => onToggle?.(todo.id)}
        >
          <StyledTodoCheckWrapper $isCompleted={todo.isCompleted}>
            <StyledCheckIcon $isCompleted={todo.isCompleted} />
          </StyledTodoCheckWrapper>
          <StyledTodoText $isCompleted={todo.isCompleted}>{todo.text}</StyledTodoText>
        </StyledTodoItem>
      ))}
    </StyledListContainer>
  );
};

export default ToDoList;
