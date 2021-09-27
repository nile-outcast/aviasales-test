import styled from "styled-components";

export const Result = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  line-height: 50px;
  height: 50px;
  padding 0 30px;
  margin-top: 10px;
  border: 1px solid #9ABBCE;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background: #F3F7FA;

  &.visible {
    display: inline-block;
  }
`;

export const Loading = styled.div`
  line-height: 50px;
  text-align: center;
  width: 510px;
  height: 50px;
  margin-top: 20px;
`;