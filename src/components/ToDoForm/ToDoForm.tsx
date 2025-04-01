import { useRef, useState, KeyboardEvent } from "react";
import {
  StyledInputDiv,
  StyledForm,
  StyledInput,
  StyledSideSection,
  StyledIcon,
} from "./ToDoForm.styles";

/*
  Форма добавления новых задач. Содержит:
  - Поле ввода с обработкой нажатия Enter
  - Иконку для скрытия/показа списка задач
  - Автофокус на поле ввода при рендере
  - Валидацию пустого ввода
 */

type Props = {
  onAddTodo: (text: string) => void;
  setVisibleTodos: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToDoForm = ({ onAddTodo, setVisibleTodos }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      onAddTodo(inputValue);
      setInputValue("");
    }
  };

  const changeVisible = () => {
    setVisibleTodos((prevState) => !prevState);
  };

  return (
    <StyledInputDiv>
      <StyledSideSection onClick={changeVisible}>
        <StyledIcon />
      </StyledSideSection>
      <StyledForm>
        <StyledInput
          ref={inputRef}
          type="text"
          value={inputValue}
          placeholder="What needs to be done?"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </StyledForm>
    </StyledInputDiv>
  );
};

export default ToDoForm;
