import React from 'react';
import {
  Header,
  ProblemContainer as Container,
  Type,Title,ButtonOuter,
  Body, SideBar, Number, Img
} from './Problem.styles';
import Button from '../Button'

const Problem = () =>{
  return (
    <Container>
      <Header>
        <Type>객관식</Type>
        <Title>집합의 표현방법 집합의 표현 방법 집합의 표현 방법 집합의 표현 방법 집합의</Title>
        <ButtonOuter>
          <Button id='similar' display='유사문항'></Button>
          <Button id='delete' display='삭제'></Button>
        </ButtonOuter>
      </Header>
      <Body>
        <SideBar>
          <Number>1</Number>
        </SideBar>
        <Img src='https://s3.ap-northeast-2.amazonaws.com/mathflat/math_problems/d/9/h/1/1/01121/9_31101121_pAjzf_jbV_p.png'/>
      </Body>
    </Container>
  );
}

export default Problem;