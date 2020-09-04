import styled from 'styled-components';


export const Container = styled.div`
  border-radius: 4px;
  box-shadow: 0 60px 100px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  margin: 3em auto 0 auto;
  width: 45%;
  padding: 2em ;
  position: relative;

  @media screen and (max-width: ${ props => props.theme.breakpoints.lg }) {
    width: 75%;
  }

  .form {
    &__title { 
      font-size: 20px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: normal;
    }
    &__description {
      font-size: 16px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      width: 75%;

      @media screen and (max-width: ${ props => props.theme.breakpoints.lg }) {
        width: 100%;
      }
    }
    &__footer {
      display: flex;
      justify-content: flex-end;

      &__submit {
        @media screen and (max-width: ${ props => props.theme.breakpoints.lg }) {
          flex: 1;
        }
      }
    } 
  }
`;