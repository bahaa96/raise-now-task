import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'react-simple-snackbar'

import Divider from '../../Elements/Divider';
import Radio from '../Radio';
import Button from '../Button';


import { Container } from './styles';


const options = [
  {
    id: 1,
    title: 'Test',
    value: 'test',
    description: 'Only transactions and subscriptions in test mode are transferred.',
  },
  {
    id: 2,
    title: 'Production',
    value: 'production',
    description: 'Only transactions and subscriptions in production mode are transferred.'
  }
]


const StepForm = (props) => {
  const [ selectedOption, setSelectedOption ] = useState(options[0].value);
  const [openSnackbar, closeSnackbar] = useSnackbar()

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      setSelectedOption(value)
    }
  }

  const handleSubmit = async () => {
    const body = {
      mode: selectedOption
    }    
    console.log('body: ', body);
    try {
      const res = await axios.post('/post', body)
    }
    catch(e) {
      openSnackbar('Accepted');
    }
  }

  return (
    <Container>
      <p className={'form__title'} >
        RaiseNow Setup
      </p>
      <p className={'form__description'}>
        The RaiseNow Payment Platform requires the following parameters to be setup
      </p>

      <Divider /> 
      {
        options.map((option, i) => {
          return (
            <Radio {...option} key={i} name={'radio'} onChange={handleChange} checked={option.value === selectedOption} />
          )
        })
      }

      <Divider /> 
      <div className={'form__footer'}>
        <Button onClick={handleSubmit} className={'form__footer__submit'}>
          <p>
            Next
          </p>
        </Button>
      </div>
    </Container>
  )
}

export default StepForm;