import styled from "styled-components";

export const FilterContainer = styled.div`
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

export const FilterButton = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  color: #777;
  font-size: 14px;
  margin: 0 5px;
  padding: 3px 7px;
  cursor: pointer;
  border-radius: 3px;
  border: ${(props) => (props.$active ? "2px solid #e9d9d8" : "1px solid transparent")};
  &:hover {
    border-color: #dbdbdb;
  }

  ${({ $active }) =>
    $active &&
    `
    border-color: #e9d9d8;
  `}

  /* Для тестов */
  &.active {
    border-color: #e9d9d8;
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: #777;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
