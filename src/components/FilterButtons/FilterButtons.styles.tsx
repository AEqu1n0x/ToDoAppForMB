import styled from "styled-components";

export const StyledFilterContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-top: 1px solid #e6e6e6;
  color: #777;
  font-size: 14px;

  @media (max-width: 470px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
    gap: 10px;
  }
`;

export const StyledFilterButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  color: #777;
  font-size: 14px;
  margin: 0 5px;
  padding: 3px 7px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid ${(props) => (props.$active ? "#e9d9d8" : "transparent")};

  &[data-active="true"] {
    border-color: #e9d9d8;
  }

  &:hover {
    border-color: #e9d9d8;
  }
`;

export const StyledClearButton = styled.button`
  background: none;
  border: none;
  color: #777;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
