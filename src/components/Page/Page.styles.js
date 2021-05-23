import styled from '@emotion/styled';
import {Colors} from '../../common/theme';

export const Header = styled.header`
  padding: 14px 25px;
  font-size : 0.9em;
  font-weight : bold;
  font-family : 'Noto Sans KR', arial, sans-serif;
  color : ${Colors.lightBlack};
  text-align :${props=> props.align};
  background-color:${Colors.White};
  margin-bottom: 3px;
`;

export const PageWrapper = styled.div`
/* width:50%; */
height:100vh;
width: 50%;
min-height: 724px;
display:inline-block;
box-shadow: 2px 0px #E0E0E0;
overflow-y: scroll;
`;

export const ProblemHeader = styled.header`
  background-color: ${Colors.White};
  display:flex;
  align-items:center;
  height: 52px;
  margin-bottom: 1px;
`;

export const ProblemContainer = styled.div`
  border-top: ${Colors.lightGray};
  border-bottom: ${Colors.lightGray};
`;

export const Type = styled.h2`
  font-size : 14px;
  margin-left:38px;
  font-weight: bold;
  color: #9F9F9F;
  word-break: keep-all;
`;

export const Title = styled.h1`
  font-size:14px;
  color: ${Colors.lightBlack};
  margin: 0px 18px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ButtonOuter = styled.div`
  /* width: 200px; */
  display: flex;
  margin-right: 10px;
`;

export const SideBar = styled.div`
  width: 90px;
  text-align:center;
`;
export const Number = styled.h2`
  color: #02C7F2;
`;

export const Body = styled.article`
  display:flex;
  background-color: ${Colors.White};
  padding: 18px 0px;
  margin-bottom:8px;
`;

export const Img = styled.img`

`;

export const EmptyPage = styled.div`
  background-color:${Colors.White};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Text = styled.p`
  margin : 0;
  text-align: center;
  font-size:14px;
  color: #9F9F9F;
  line-height:28px;
`