import styled from "styled-components";
import { CheckIcon } from "@heroicons/react/24/outline";

export const StyledListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledTodoItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 0 16px;
  animation: fadeIn 0.3s ease-out forwards;
  opacity: 0;
  transform: translateY(-10px);

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.15s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
`;

export const StyledTodoCheckWrapper = styled.div<{ $isCompleted: boolean }>`
  width: 30px;
  height: 30px;
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => (props.$isCompleted ? "#5dc2af" : "#e6e6e6")};
  border-radius: 50%;
  margin-right: 10px;
  transition: all 0.2s ease;
  &:hover {
    border-color: ${(props) => (props.$isCompleted ? "#5dc2af" : "#c5c5c5")};
  }
`;

export const StyledCheckIcon = styled(CheckIcon)<{ $isCompleted: boolean }>`
  width: 18px;
  height: 18px;
  color: ${(props) => (props.$isCompleted ? "#5dc2af" : "transparent")};
  stroke-width: 2;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.$isCompleted ? "1" : "0.5")};
  cursor: pointer;
`;

export const StyledTodoText = styled.span<{ $isCompleted: boolean }>`
  cursor: pointer;
  flex: 1;
  font-size: 24px;
  font-weight: 300;
  color: ${(props) => (props.$isCompleted ? "#d9d9d9" : "#4d4d4d")};
  text-decoration: ${(props) => (props.$isCompleted ? "line-through" : "none")};
  padding-left: 10px;
  transition: color 0.2s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 60px;
  line-height: 30px;
`;
