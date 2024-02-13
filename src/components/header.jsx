import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoIMG from "../assets/logo.svg"


const HeaderComp = styled.header`
display: flex;
flex-direction: column;
width: 100vw;

`;

const Logo = styled.div`
display: flex;
justify-content: center;
align-itens: center;
background-color: black;
width: 100vw;
height: 15vh;
margin: 0 0 70px 0
`;

const LogoStyled = styled.img`

width: 180px;
background-size: cover;

`;

const H1 = styled.h1`

display: flex;
flex-direction: column;
flex-wrap: wrap;
text-transform: uppercase;
margin: 0 0 0 2%;
color: #333333;
`;

const Span = styled.span`
width: 120px;
height: 13px;
margin: 20px 0 0 2%;
background-color: #333333;;
`;

const P = styled.p`

margin: 40px 70px 0 2%;
display: flex;

font-size: 21px;
color: #808080;

`;


export default function Header(){
    return(
        <HeaderComp>
            <Logo>
                <LogoStyled src={LogoIMG} />
            </Logo>
            <H1>Reabertura</H1>
            <H1>Smart Fit</H1>
            <Span></Span>
            <P>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui<br/> se a sua cidade está aberta e as medidas que estamos seguindo.</P>
        </HeaderComp>
    )
}
