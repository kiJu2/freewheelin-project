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
  // const selectedStyle = `
    
  // `

  // let activeTarget = null;

  // const setSelected = (target) =>{
  //   activeTarget
  // }

  const template = () =>{
    return (
      <PageWrapper>
        <Header align={align}>{title}</Header>
        <ProblemContainer>
          {datas.map((data, idx)=>(
              <div>
                <ProblemHeader>
                  <Type>{data.problemType}</Type>
                  <Title>{data.unitName}</Title>
                  <ButtonOuter>
                    <Button
                      key={data.id+'similar'} 
                      id={data.id} type='similar' 
                      display='유사문항'
                      selected={Active === data.id}
                      onClick={_=>{
                        setActive(data.id);
                        onClickActive(data.id);
                        console.log(Active);
                        }}>
                    </Button>
                    <Button 
                      key={data.id+'delete'} 
                      id={data.id} type='delete' 
                      display='삭제' 
                      onClick={()=>onClickDelete(data.id)}>
                    </Button>
                  </ButtonOuter>
                </ProblemHeader>
                <Body>
                  <SideBar>
                  <Number>{idx+1}</Number>
                  </SideBar>
                  <Img src={data.problemURL}/>
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