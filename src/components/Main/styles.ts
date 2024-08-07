'use client'

import styled from 'styled-components'

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #06092b;
    color: #fff;
    padding: 3rem;
    text-align: center;
    flex-direction: column;
`

export const Logo = styled.img`
    width: 25rem;
    margin-bottom: 2rem;
`

export const Title = styled.h1`
    font-size: 2.5rem;
`

export const Description = styled.h2`
    font-size: 2rem;
    font-weight: 400;
`

export const Illustration = styled.img`
    margin-top: 3rem;
    width: min(30rem, 100%);
`
