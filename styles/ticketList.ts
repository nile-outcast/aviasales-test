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
  display: inline-block;
  user-select: none;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  width: 170px;
  height: 50px;
  border: 1px solid #9ABBCE;
  border-left: ${(props) => { if (props.htmlFor == "fast") return "0"; }};
  border-right: ${(props) => { if (props.htmlFor == "fast") return "0"; }};
  border-radius: ${(props) => (
    props.htmlFor == "fast" ? "" : (
      props.htmlFor == "cheap" ? "5px 0 0 5px" : "0 5px 5px 0"
    ))};
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

export const TicketTable = styled.div`
  width: 510px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;