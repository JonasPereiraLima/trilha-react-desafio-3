import React from 'react';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Column, Container, ExtraContent, LoginText, SubtitleSignUp, Termos, Title, TitleSignUp, Wraper } from './styles';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    senha: yup.string().min(3, "A senha deve ter ao menos 3 caracteres").required("Senha é obrigatória")
  })
  .required();

export default function SignUp() {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors  } } = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try {
            const users = await api.get("/users");
            const response = users.data;
            const user = response.find(user => user.email === formData.email);
            if(user) return alert("Email já existe");
            await api.post("/users", formData);
            navigate("/feed");
            return;
        } catch (error) {
            console.log("erro =>" + error);
        }
    };

  return (
    <>
    <Header />
    <Container>
        <Column>
            <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </Column>
        <Column>
            <Wraper>
                <TitleSignUp>
                Comece agora grátis
                </TitleSignUp>
                <SubtitleSignUp>
                Crie sua conta e make the change._
                </SubtitleSignUp>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="name"  control={control} />
                {errors.name && <span>{errors.name.message}</span>}
                <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                {errors.email && <span>{errors.email.message}</span>}
                <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                {errors.senha && <span>{errors.senha.message}</span>}
                <Button title="Criar minha conta" variant="secondary" type="submit" />
                </form>
                <ExtraContent>
                    <Termos>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Termos>
                    <LoginText>Já tenho conta. <a href='/login'>Fazer login</a></LoginText>
                </ExtraContent>
            </Wraper>
        </Column>
    </Container>
    </>
  )
}