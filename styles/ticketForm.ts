import styled from "styled-components";

export const TicketTable = styled.div`
  width: 510px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const Button = styled.button`
  display: block;
  user-select: none;
  color: white;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  width: 510px;
  height: 50px;
  margin-top: 20px;
  border: 1px solid #2196F3;
  border-radius: 5px;
  background-color: #2196F3;

  &:hover {
    color: #F1FCFF;
  }
`;