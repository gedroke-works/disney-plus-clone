import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                You should read this small paragraph otherwise
                you might get scammed and lose your money !
                This warning is sponsored by Uncle Sam and Elon Musk**.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>

        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    display: flex;
    align-items center;
    justify-content: center;
    flex-direction: column;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('/images/login-background.jpg')
        center center / cover no-repeat fixed;
        z-index: -1;
    }
`
const CTA = styled.div `
    max-width: 650px;
    padding: 80px 40px;
    width: 85%;
`

const CTALogoOne = styled.img`
    width: 100%;

`
const CTALogoTwo = styled.img`
    width: 100%;
    
`

const SignUp = styled.a `
    width: 100%;
    background-color: rgba(0, 99, 229, 1);
    font-weight: bold;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    padding: 12px 0px;
    margin-top: 8px;
    cursor: pointer;

    &:hover {
        background-color: rgba(50, 110, 255, 1);
    }
`
const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 1.5;
    text-align: center;
`