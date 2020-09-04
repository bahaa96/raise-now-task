import React from 'react'
import styled from 'styled-components';



const Radio = ({ id, value, title, description, name, ...restProps}) => {
  return (
    <Container className={'radio'}>
      <input type="radio" name={name} className={'radio__input'} id={`match_${ id }`} value={value} {...restProps} /> 
      <label htmlFor={`match_${ id }`} className={'radio__label'}>
        <div className={'radio__label__icon'}  />
        <div className={'radio__label__text'}>
          <p className={'radio__label__title'}>
            {
              title
            }
          </p>
          <p className={'radio__label__description'}>
            {
              description
            }
          </p>
        </div>
      </label>
    </Container>
  )
}

const Container = styled.div`
  .radio {
    &__label {
      box-sizing: border-box;
      display: block;
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity: .5;
      transition: all .5s ease-in-out;

      &__text {
        display: inline;
        position: relative;
        top: -1.5em;
        left: 2em;
      }
      &__icon {
        background-image: url('/imgs/radio-unchecked.svg');
        height: 25px;
        background-repeat: no-repeat;
      }
      &__title {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
      }
      &__description { 
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: #999999;
        width: 90%;
      }
    }
    &__input[type="radio"] {
      opacity: 0;
      width: 0;
      height: 0;
    }
  
    &__input[type="radio"]:active ~ label {
      opacity: 1;
    }
  
    &__input[type="radio"]:checked ~ label {
      opacity: 1;

      .radio__label__icon {
        background-image: url('/imgs/radio-checked.svg');

      }
    }


  }
  
`


export default Radio;