import styled from "styled-components";

export const SortConteiner = styled.div`
  float: right;
  width: 510px;
  margin-left: 20px;
`;

export const UlSort = styled.ul`
  margin: 0;
  padding: 0;
`;

export const LiSort = styled.li`
  display: inline-block;
  user-select: none;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  width: 170px;
  height: 50px;
  border: 1px solid #9ABBCE;
  border-left: ${(props) => { if (props.id == "fast") return "0"; }};
  border-right: ${(props) => { if (props.id == "fast") return "0"; }};
  border-radius: ${(props) => (
    props.id == "fast" ? "" : (
      props.id == "cheap" ? "5px 0 0 5px" : "0 5px 5px 0"
    ))};
  background-color: white;

  &:hover {
    background-color: #F1FCFF;
  }

  &.active {
    color: white;
    border-color: #2196F3;
    background-color: #2196F3;
  }    
`;