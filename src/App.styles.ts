import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 72px;
  font-weight: 100;
  color: #e9d9d8;
  letter-spacing: 6px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 48px;
  }
`;

export const StyledMainContent = styled.div`
  background-color: #fefefe;
  height: 100%;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  border-radius: 2px;
  border: 2px solid #e6e6e6;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledBottomContent1 = styled.div`
  background-color: #fefefe;
  min-height: 6px;
  width: 98%;
  max-width: 580px;
  min-width: 280px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const StyledBottomContent2 = styled.div`
  background-color: #fefefe;
  min-height: 6px;
  width: 96%;
  max-width: 560px;
  min-width: 260px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledP = styled.p`
text-align: center;
`
