import React from 'react';
import styled from 'styled-components';


const Stepper = (props) => {
  return (
    <Container>
      <p>
        Step 1 of 3
      </p>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  margin: 1em 0; 
`;

export default Stepper;