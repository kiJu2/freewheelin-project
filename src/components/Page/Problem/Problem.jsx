import React from 'react';
import PropTypes from 'prop-types';

import {
  Header, PageWrapper,

  ProblemHeader,
  ProblemContainer,
  Type,Title,ButtonOuter,
  Body, SideBar, Number, Img
} from '../Page.styles';
import Button from '../../Button'

const Problem = ({title, align, datas, handles, Active, functions}) =>{
  const {onClickActive, onClickDelete} = handles;
  const {setActive} = functions;

  const template = () =>{
    return (
      <PageWrapper>
        <Header align={align}>{title}</Header>
        <ProblemContainer>
          {datas.map((data, idx)=>(
              <div key={idx+'div'}>
                <ProblemHeader key={idx+'problemheader'}>
                  <Type key={idx+'type'}>{data.problemType}</Type>
                  <Title key={idx+'title'}>{data.unitName}</Title>
                  <ButtonOuter key={idx+'buttonouter'}>
                    <Button
                      key={data.id+'similar'} 
                      id={data.id} type='similar' 
                      selected={Active === idx}
                      display='유사문항'
                      onClick={_=>{
                        setActive(idx);
                        onClickActive(data.id, idx);
                        }}>
                    </Button>
                    <Button 
                      key={data.id+'delete'} 
                      id={data.id} type='delete' 
                      display='삭제' 
                      onClick={()=>onClickDelete(data.id, idx)}>
                    </Button>
                  </ButtonOuter>
                </ProblemHeader>
                <Body key={idx+'body'}>
                  <SideBar key={idx+'sidebar'}>
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

  return template();
}

Problem.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.string,
}
Problem.defaultProps = {
  title: '-',
  align: 'left',
}

export default Problem;