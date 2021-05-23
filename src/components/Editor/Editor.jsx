import React, {useState, useEffect} from 'react';

import {
  EditorContainer as Container,
} from './Editor.styles';
import Similar from '../Page/Similar'
import Problem from '../Page/Problem'

import {request} from '../../common/utils';

const Editor = () =>{
  const [Problems, setProblems] = useState([]);
  const [Similars, setSimilars] = useState([]);
  const [Active, setActive] = useState(null);

  useEffect(() => {
    getProblems().then(response=>{setProblems(response)});
    
    return () => {
    }
  }, []);

  const getProblems = async ()=>{
    const URL = 'http://localhost:3333/fe-problems';
    return await request(URL).then(response=> response);
  }
  const getSimilars = async ()=>{
    const URL = 'http://localhost:3333/fe-similars';
    return await request(URL).then(response=> response);
  }

  const handleClickActive = (id) =>{
    getSimilars().then(response=>{setSimilars(response)});
  }
  const handleClickDelete = (id) =>{
    const isDeleteActive = id === Active;
    setProblems(Problems.filter(v=> v.id !== id));
    if(isDeleteActive){
      setSimilars([]);
      setActive(0);
    }

  }
  
  const handleClickAdd = (id) =>{
    const clickedSimilar = Similars.filter(v=>v.id===id)[0];
    const problemIdx = (function(){
      for(let idx=0; idx<Problems.length; idx++){
        if(Problems[idx].id === Active) return idx;
      }
    })();
    const newProblems = [...Problems.slice(0, problemIdx+1), clickedSimilar, ...Problems.slice(problemIdx+1, Problems.length)];
    const newSimilars = Similars.filter(v=>v.id!==id);

    setProblems(newProblems);
    setSimilars(newSimilars);
  }
  const handleClickChange = (id) =>{
    // 
    // handleClickAdd와 같이 스왑을 진행합니다.
    // 
  }

  return (
  <Container>
    <Problem 
      handles={{
        onClickActive: handleClickActive,
        onClickDelete: handleClickDelete,
      }}
      functions={{
        setActive : setActive,
      }}
      Active={Active}
      title='문항 교체/추가' 
      align='center'
      datas={Problems}></Problem>
    <Similar 
      handles={{
        onClickAdd: handleClickAdd,
        onClickChange: handleClickChange,
      }}
      title='학습지 상세 편집' 
      datas={Similars}></Similar>
  </Container>);
}

export default Editor;