import * as S from './styles/styles'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button'
import { Img } from '../../components/Img'
import github from '../../images/icons8-github.svg'
import { Title } from '../../components/Title'
import { useFormik } from 'formik'
import { NewAccount } from '../../components/NewAccount'
import { Link, useNavigate } from 'react-router-dom'
import { Errors } from '../../components/Errors'
import { useState } from 'react'

export function Login() {

  const [errors, setErrors] = useState<string>('')
  
  const navigate = useNavigate()
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {

      const hasEmailAndPasswordOnField = values.email && values.password
      
      if(!hasEmailAndPasswordOnField) {
        return setErrors('Email ou password invádido!')
      }

      if(values.email === 'login123@login.com' && values.password === '123') {
        return navigate('/home')
      }
      
      return setErrors('Email ou password invádido!')
    }
  })
  
  return (
    <>
      <S.Page>

        <Img src={github} alt='Github logo' />

        <S.Container>
          <Title>Sign in to GitRepos</Title>
          
          <S.Form onSubmit={formik.handleSubmit}>
            <Input 
              type='email' 
              onChange={formik.handleChange} 
              htmlFor='email'
              values={formik.values.email}
              label='Username or email address'
              name='email'
            />

            <Input 
              type='password'
              onChange={formik.handleChange}
              htmlFor='password'
              values={formik.values.password}
              label='Password'
              name='password'
            />

            { errors && <Errors>{ errors }</Errors> }

            <Button type='submit'>
              Sign in
            </Button>
          </S.Form>

          <NewAccount>
            New to GitHub?<Link to=''>Create an account .</Link>
          </NewAccount>
        </S.Container>
      </S.Page>
    </>
  )
}