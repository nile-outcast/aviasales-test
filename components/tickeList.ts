import styled from "styled-components";

export const TicketTable = styled.table`
  user-select: none;
  width: 510px;
  padding-bottom: 10px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const TicketCell = styled.td`
  color: #A0B0B9;
  line-height: 18px;
  width: 170px;
  padding: 0 20px;
`;

export const TicketCellBold = styled(TicketCell)`
  color: #4A4A4A;
  font-size: 14px;
  line-height: 21px;
  padding-bottom: 10px;
`;

export const TicketCellPrice = styled(TicketCell)`
  color: #2196F3;
  font-size: 24px;
  line-height: 24px;
  height: 70px;
`;

export const ImgLogo = styled.img`
  height: 40px;
`;

export const Button = styled.button`
  display: block;
  user-select: none;
  cursor: pointer;
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