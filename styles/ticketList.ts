import styled from "styled-components";

export const TicketList = styled.div`
  float: right;
  width: 510px;
  margin-left: 20px;
`;

export const InputSort = styled.input`
  display: none;
`;

export const LabelSort = styled.label`
  display: inline-flex;
  user-select: none;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  width: 170px;
  height: 50px;
  border: 1px solid #9ABBCE;
  background-color: white;

  ${InputSort}:checked + & {
    color: white;
    border-color: #2196F3;
    background-color: #2196F3;
  }

  &:hover {
    background-color: #F1FCFF;
  }
`;

export const Ticket = ``;