import React from 'react';
import styled from 'styled-components';


const Button = (props) => {
  return (
    <Container {...props}>
      {
        props.children
      }
    </Container>
  )
}

const Container = styled.button`
  border-radius: 4px;
  background-color: #db006b;
  padding: .5em 2em;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover, &:focus, &:active {
    background-color: #9e2058;
  } 
  &:disabled {
    background-color: #999999;
  }
`;

export default Button;