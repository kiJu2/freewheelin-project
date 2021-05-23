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
    localStorage.clear();
    getProblems().then(response=>{setProblems(response)});
    
    return () => {
    }
  }, []);

  const getProblems = async ()=>{
    const storageProblems = localStorage.getItem('problems');
    if(storageProblems)
      return await JSON.parse(storageProblems);
    
    const URL = 'http://localhost:3333/fe-problems';
    const response = await request(URL).then(response=> response);

    localStorage.setItem('problems', JSON.stringify(response));

    return response;
  }
  const getSimilars = async ()=>{
    const storageSimilars = localStorage.getItem('similars');
    if(storageSimilars)
      return await JSON.parse(storageSimilars);

    const URL = 'http://localhost:3333/fe-similars';
    const response = await request(URL).then(response=> response);

    localStorage.setItem('similars', JSON.stringify(response));

    return response
  }

  const handleClickActive = (id, index) =>{
    getSimilars().then(response=>{setSimilars(response)});
  }
  const handleClickDelete = (id, index) =>{
    const isDeleteActive = index === Active;
    const isHigherActive = index < Active;
    const newProblems = Problems.filter((_,idx)=> idx !== index);
    setProblems(newProblems);
    if(isDeleteActive){
      setSimilars([]);
      setActive(null);
    }
    if(isHigherActive){
      setActive(Active-1);
    }
  }
  
  const handleClickAdd = (id, index) =>{
    const clickedSimilar = Similars[index];
    const newProblems = [...Problems.slice(0, Active+1), clickedSimilar, ...Problems.slice(Active+1, Problems.length)];
    const newSimilars = Similars.filter(v=>v.id!==id);

    setProblems(newProblems);
    setSimilars(newSimilars);
  }
  const handleClickChange = (id, index) =>{
    const clickedSimilar = Similars[index];
    const targetProblem = Problems[Active];

    const newProblems = [...Problems.slice(0, Active), clickedSimilar, ...Problems.slice(Active+1, Problems.length)];
    const newSimilars = [...Similars.slice(0, index), targetProblem, ...Similars.slice(index+1, Similars.length)];

    setProblems(newProblems);
    setSimilars(newSimilars);
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