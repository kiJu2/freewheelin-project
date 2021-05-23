import styled from '@emotion/styled';
import {css} from '@emotion/css';

import {Colors} from '../../common/theme';

export const ButtonWrapper = styled.button`
  border: 1px solid #E0E0E0;
  border-radius:3px;
  width:80px;
  height:36px;
  padding:0px;
  margin: 0px 4px;
  background-color:${Colors.White};
  color: #00ABFF;
  font-weight: bold;
  &:hover{
    cursor:pointer;
  }
`;


export const ButtonStyle = styled.span`
  border: 1px solid #E0E0E0;
  border-radius:3px;
  width:70px;
  height:24px;
  padding:0px;
  margin: 4px 4px;
  background-color:${Colors.White};
  display:inline-block;
  color: #00ABFF;
  font-weight: bold;
  font-size:12px;

  
`;

export const Select = css`
  color:${Colors.White};
  background-color:#00ABFF;
`;

// export const Active = css`
// `
// export const Active = styled.