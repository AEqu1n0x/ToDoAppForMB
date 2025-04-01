import styled from "styled-components";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const StyledIcon = styled(ChevronDownIcon)`
  color: #e6e6e6;
  width: 24px;
  height: 24px;
  transition: color 0.2s;

  &:hover {
    color: #737373;
  }
`;

export const StyledInputDiv = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 2px;
  border-bottom: 2px solid #e6e6e6;
  display: flex;
  align-items: center;
`;

export const StyledForm = styled.div`
  width: 90%;
  height: 100%;
`;

export const StyledSideSection = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0 15px;
  font-size: 20px;
  font-weight: 100;
  color: #4d4d4d;
  background: transparent;
  box-sizing: border-box;

  &::placeholder {
    color: #e6e6e6;
    font-style: italic;
    padding-left: 5px;
    transition: opacity 0.2s;
  }

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0.5;
    }
  }

  &:hover {
    &::placeholder {
      color: #d9d9d9;
    }
  }
`;
