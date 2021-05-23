import React from 'react';
import PropTypes from 'prop-types';

import {
  Header, PageWrapper,

  ProblemHeader,
  ProblemContainer,
  Type,Title,ButtonOuter,
  Body, SideBar, Number, Img,

  EmptyPage, Text,
} from '../Page.styles';
import {
  ButtonStyle,
} from '../../Button/Button.styles'

import Button from '../../Button'

const Similar = ({title, align, datas, handles}) =>{
  const isEmpty = !datas.length;
  const {onClickAdd, onClickChange} = handles;

  const template = () =>{
    if(isEmpty){
      return(
        <PageWrapper>
        <Header align={align}>{title}</Header>
        <EmptyPage>
          <Text>
            <ButtonStyle>유사문항</ButtonStyle> 버튼을 누르면<br/> 해당 문제의 유사 문항을 볼 수 있습니다.
          </Text>
        </EmptyPage>
      </PageWrapper>
      )
    }
    else{
      return (
        <PageWrapper>
          <Header align={align}>{title}</Header>
          <ProblemContainer>
            {datas.map((data, idx)=>(
                <div key={idx+'div'}>
                  <ProblemHeader key={idx+'problemheader'}>
                    <Type key={idx+'type'}>{data.problemType}</Type>
                    <Title key={idx+'title'} title={idx+'title'}>{data.unitName}</Title>
                    <ButtonOuter key={idx+'buttonouter'}>
                      <Button 
                        onClick={_=>{
                          onClickAdd(data.id, idx);
                        }}
                        key={data.id+'add'} 
                        id={data.id} 
                        type='add' 
                        display='추가'></Button>
                      <Button 
                        onClick={_=>{
                          onClickChange(data.id, idx);
                        }}
                        key={data.id+'change'} 
                        id={data.id} 
                        type='change' 
                        display='교체'></Button>
                    </ButtonOuter>
                  </ProblemHeader>
                  <Body key={idx+'body'}>
                    <SideBar key={idx+'siderbar'}>
                    <Number key={idx+'number'}>{idx+1}</Number>
                    </SideBar>
                    <Img key={idx+'img'} src={data.problemURL}/>
                  </Body>
                </div>
              )
            )}
          </ProblemContainer>
        </PageWrapper>
      );
    }
  }

  return template();
}

Similar.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.string,
}
Similar.defaultProps = {
  title: '-',
  align: 'left',
}

export default Similar;