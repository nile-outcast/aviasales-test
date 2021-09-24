import styled from "styled-components";

export const TicketTable = styled.div`
  display: table
  user-select: none;
  width: 510px;
  padding: 25px 0 10px 0;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const TicketRow = styled.div`
  display: table-row;
`;

export const TicketCell = styled.div`
  display: table-cell;
  color: #A0B0B9;
  line-height: 18px;
  width: 170px;
  padding: 0 0 0 20px;
`;

export const TicketCellBold = styled(TicketCell)`
  color: #4A4A4A;
  font-size: 14px;
  line-height: 21px;
  padding: 0 0 10px 20px;
`;

export const TicketCellHead = styled.div`
  display: table-cell;
  color: #2196F3;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  padding: 0 0 30px 20px;
`;

export const Button = styled.button`
  display: block;
  user-select: none;
  color: white;
  line-height: 50px;
  text-align: center;
  width: 510px;
  height: 50px;
  margin-top: 20px;
  border: 1px solid #DFE5EC;
  border-radius: 5px;
  background-color: #2196F3;

  &:active {
    color: #F1FCFF;
    border-color: #2196F3;
  }
`;