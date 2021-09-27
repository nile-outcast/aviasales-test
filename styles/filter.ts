import styled from "styled-components";

export const FilterDiv = styled.div`
  position: absolute;
  top: 0;
  left: -250px;
  background-color: white;
  width: 230px;
  height: 256px;
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FilterTitle = styled.div`
  padding: 10px 20px;
  user-select: none;
`;

export const FilterInput = styled.input`
  display: none;
`;

export const FilterLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:last-child {
    padding-bottom: 10px;
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    background-color: #F1FCFF;
  }
`;

export const FilterSpan = styled.span`
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: 13px;
  font-weight: normal;
  line-height: 20px;
  width: 230px;
  padding: 10px 20px;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid #9ABBCE;
    border-radius: 2px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
  }

   ${FilterInput}:checked + &::before {
    border-color: #2196F3;
    background-image: url("/shape.svg");
  }
`;