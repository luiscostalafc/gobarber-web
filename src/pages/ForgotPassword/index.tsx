import React, { useRef, useCallback } from 'react'
import { FiLogIn, FiMail } from 'react-icons/fi'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import { useToast } from '../../hooks/toast'
import getValidationErrors from '../../utils/getValidationErrors'

import logoImg from '../../assets/logo.svg'
import signInBackgroundImg from '../../assets/sign-in-background.png'

import Button from '../../components/Button'
import Input from  '../../components/Input'

import { Container, Content, Background, Image, AnimationContainer } from './styles'

interface ForgotFormData {
   email: string
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { addToast } = useToast()

  //const history = useHistory()


  const handleSubmit = useCallback(async (data: ForgotFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
      })
      await schema.validate(data, {
        abortEarly:false,
      })

     // recuperação de senha

      //history.push('/dashboard')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

      formRef.current?.setErrors(errors)

      return
      }

      addToast({
        type: 'info',
        title: 'Erro na recuperação de senha',
        description: 'Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente',
      })

    }
  }, [addToast])


  return (
    <Container>
      <Content>
        <AnimationContainer>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recuperar senha</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button type="submit">Recuperar</Button>

        </Form>
        <Link to="/">
          <FiLogIn />
    Voltar ao login
    </Link>
    </AnimationContainer>
      </Content>

      <Background>
      <Image src={signInBackgroundImg} />
      </Background>
    </Container>

  );
}



export default ForgotPassword
