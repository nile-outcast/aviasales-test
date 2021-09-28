import styled from "styled-components";

interface SortTitleProps {
  readonly isActive: boolean;
}

export const SortContainer = styled.div`
  position: relative;
  width: 510px;
  margin-left: 250px;
`;

export const UlSort = styled.ul`
  margin: 0;
  padding: 0;
`;

export const LiSort = styled.li<SortTitleProps>`
  display: inline-block;
  user-select: none;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  color: ${({ isActive }) => { if (isActive) return 'white'; }};
  width: 170px;
  height: 50px;
  border: 1px solid;
  border-color: ${({ isActive }) => isActive ? '#2196F3' : '#9ABBCE'};
  border-left: ${({ id }) => { if (id === "fast") return "0"; }};
  border-right: ${({ id }) => { if (id === "fast") return "0"; }};
  border-radius: ${({ id }) => (
    id === "fast" ? '' : (
      id === "cheap" ? '5px 0 0 5px' : '0 5px 5px 0'
    ))};
  background-color: ${({ isActive }) => isActive ? '#2196F3' : 'white'};

  &:hover  {
    background-color: ${({ isActive }) => isActive ? '#2196F3' : '#F1FCFF'};
  }   
`;