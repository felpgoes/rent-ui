import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Creators as AuthActions } from '../../store/ducks/auth';

import logoIMG from '../../assets/logo_size.jpg';
import { Container, Content, Background, AnimationContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
  const formRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const { signIn } = useSelector((state) => state.auth);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('A senha é obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(AuthActions.signInRequest(data));
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current.setErrors(errors);
        }
      }
    },
    [history]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoIMG} alt="RentAi" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />
            <Button disabled={signIn.loading} type="submit">
              Entrar
            </Button>
            <a href="a">Esqueci minha senha</a>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
