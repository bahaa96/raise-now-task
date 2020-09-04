import React from 'react';
import styled from 'styled-components';


const HeaderBar = (props) => {
  return (
    <Container>
      <div>
        <div className={'logo'}>
          <img src={'/imgs/logo-raise-now-inverted.svg'} alt={'logo'} />   
        </div>  
      </div>
    </Container>
  )
}

const Container = styled.div`
  padding: 1rem;
  background-color: ${ props => props.theme.colors.brandPrimary };
`;

export default HeaderBar;