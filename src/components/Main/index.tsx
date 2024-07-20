import * as S from './styles'

const Main = ({
    title = 'React Avançado!',
    description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
    <S.Wrapper>
        <S.Logo src="/img/logo.png" alt="React image" />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration src="/img/hero-illustration.png" alt="Hero image" />
    </S.Wrapper>
)

export default Main
