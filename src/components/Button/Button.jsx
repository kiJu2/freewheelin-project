import React from 'react';
import PropTypes from 'prop-types';
import { prototype } from 'events';

import {css} from '@emotion/css';

import {
  ButtonWrapper,
  Select,
} from './Button.styles';


const Button = ({onClick, type, display, selected}) =>{
  return (
    <ButtonWrapper 
      className={selected ? 'selected' : ""}
      name={type} 
      onClick={onClick}>
      {display}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  onClick : PropTypes.func,
  type: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
}
Button.defaultProps = {
  onClick:()=>{},
  display:'Button',
}

export default Button;