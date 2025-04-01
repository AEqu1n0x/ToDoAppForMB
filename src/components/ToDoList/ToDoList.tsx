import { TTodo } from "../../types/types";
import {
  ListContainer,
  TodoItem,
  TodoCheckWrapper,
  StyledCheckIcon,
  TodoText,
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
    <ListContainer>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          style={{ animationDelay: `${index * 0.05}s` }}
          onClick={() => onToggle?.(todo.id)}
        >
          <TodoCheckWrapper $isCompleted={todo.isCompleted}>
            <StyledCheckIcon $isCompleted={todo.isCompleted} />
          </TodoCheckWrapper>
          <TodoText $isCompleted={todo.isCompleted}>{todo.text}</TodoText>
        </TodoItem>
      ))}
    </ListContainer>
  );
};

export default ToDoList;
