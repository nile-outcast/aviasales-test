import styled from "styled-components";

export const FilterDiv = styled.div`
  float: left;
  background-color: white;
  width: 230px;
  padding-top: 10px;
  border-radius: 5px;
`;

export const FilterTitle = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  user-select: none;
`;

export const FilterInput = styled.input`
  display: none;
`;

export const FilterLabel = styled.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: 13px;
  line-height: 20px;
  width: 230px;
  padding: 10px 20px;

  &:last-child {
    padding-bottom: 20px;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #9ABBCE;
    border-radius: 2px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center;
  }

  ${FilterInput}:checked + &::before {
    border-color: #2196F3;
    background-image: url("/shape.svg");
  }

  &:hover {
    background-color: #F1FCFF;
  }
`;