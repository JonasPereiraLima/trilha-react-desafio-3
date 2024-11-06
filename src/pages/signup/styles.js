import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    gap: 200px;
    max-width: 80%;
    margin: 100px auto;
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h1`
    font-size: 2rem;
`

export const Wraper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    form > button {
        margin-top: 20px;
    }
`

export const TitleSignUp = styled.h2`
    font-size: 2rem;
    font-weight: 700;
`

export const SubtitleSignUp = styled.p`
    font-size: 1.125rem;
    font-weight: 400px;
    margin-bottom: 15px;
`

export const ExtraContent = styled.div`
    margin-top: 15px;
`

export const Termos = styled.p`
    font-size: 1.125rem;
    font-weight: 400px;
`

export const LoginText = styled.p`
    margin-top: 10px;
    font-size: 0.875rem;
    font-weight: 700px;

    a {
        color: #23DD7A;
        text-decoration: none;
    }
`