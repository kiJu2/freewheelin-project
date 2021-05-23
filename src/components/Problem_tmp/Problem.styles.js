import styled from '@emotion/styled';
import {Colors} from '../../common/theme';

export const ProblemContainer = styled.div`
  border-top: ${Colors.lightGray};
  border-bottom: ${Colors.lightGray};
  /* background-color: ${Colors.lightGray}; */
`

export const Header = styled.header`
  background-color: ${Colors.White};
  display:flex;
  align-items:center;
  height: 52px;
  margin-bottom: 1px;
`

export const Type = styled.h2`
  font-size : 14px;
  margin-left:38px;
  font-weight: bold;
  color: #9F9F9F;
  word-break: keep-all;
`

export const Title = styled.h1`
  font-size:14px;
  color: ${Colors.lightBlack};
  margin: 0px 18px;
  width: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const ButtonOuter = styled.div`
  /* width: 200px; */
  display: flex;
  margin-right: 10px;
`

export const SideBar = styled.div`
  width: 90px;
  text-align:center;
`
export const Number = styled.h2`
  color: #02C7F2;
`

export const Body = styled.article`
  display:flex;
  background-color: ${Colors.White};
  padding: 18px 0px;
  margin-bottom:8px;
`

export const Img = styled.img`

`