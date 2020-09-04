import React from 'react';
import styled from 'styled-components';

import HeaderBar from '../../components/HeaderBar';
import Stepper from '../../components/Stepper';
import StepForm from '../../components/SetupForm';



const Home = (props) => {
  return (
    <Container>
      <HeaderBar />
      <Stepper />
      <div className={'content-wrapper'}>
        <StepForm />
      </div>  
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  display: flex; 
  flex-flow: column;

  .content-wrapper {
    flex: 1;
    background-color: #f5f5f5;
    flex: 1;
  }
`;

export default Home;