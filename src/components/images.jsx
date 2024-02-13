import styled from "styled-components"
import rMask from "../assets/recommended-mask.png"
import reqMask from "../assets/required-mask.png"
import rTowel from "../assets/recommended-towel.png"
import reTowel from "../assets/required-towel.png"
import pFountain from "../assets/partial-fountain.png"
import feFountain from "../assets/forbidden-fountain.png"
import reLockerrom from "../assets/required-lockerroom.png"
import pLockerrom from "../assets/partial-lockerroom.png"
import fLockerrom from "../assets/forbidden-lockerroom.png"
import { useState, useEffect } from "react"

    

    const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 2% 70px 2%;
    flex-direction: row;
    flex-wrap: wrap;
    `;

    const Title = styled.p`
    display: flex;
    justify-content: center;
    margin: 30px 0 20px 0;
    font-weight: bolder;
    `;

    const ImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-itens: center;
    margin-left: 50px;
    margin: 0 20px 0 0;
    padding: 0;
    `;

    const ImagesWithTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    margin: 0 0 0 30px;
    text-align: center;
    
    `;

   export const Img = styled.img`
    width: 70px;
    height: 70px;
    margin: 0 0 7px 0
    `;

    const ImgSpan = styled.p`
    margin: 0 0 7px 0;
    
    `;

    const Mask = styled.div`
    display: flex;
    flex-direction: column;
    `;

export default function Images(){
    return(
        <ImgContainer>
            <Mask>
                <Title>Máscara</Title>
                    <ImagesContainer>
                        <ImagesWithTitle>
                            <Img src={reqMask}/>
                            <ImgSpan>Obrigatório</ImgSpan>
                        </ImagesWithTitle>
                        <ImagesWithTitle> 
                            <Img src={rMask}/>
                           <ImgSpan>Opcional</ImgSpan>
                        </ImagesWithTitle>       
                    </ImagesContainer>
            </Mask>
            <Mask>
                <Title>Toalha</Title>
                    <ImagesContainer>
                        <ImagesWithTitle>
                            <Img src={reTowel}/>
                            <ImgSpan>Obrigatório</ImgSpan>
                        </ImagesWithTitle>
                        <ImagesWithTitle> 
                            <Img src={rTowel}/>
                            <ImgSpan>Opcional</ImgSpan>
                        </ImagesWithTitle>       
                    </ImagesContainer>
            </Mask>
            <Mask>
                <Title>Bebedouro</Title>
                    <ImagesContainer>
                        <ImagesWithTitle>
                            <Img src={pFountain}/>
                            <ImgSpan>Parcial</ImgSpan>
                        </ImagesWithTitle>
                        <ImagesWithTitle> 
                            <Img src={feFountain}/>
                            <ImgSpan>Proibido</ImgSpan>
                        </ImagesWithTitle>       
                    </ImagesContainer>
            </Mask>
            <Mask>
                <Title>Vestiários</Title>
                    <ImagesContainer>
                        <ImagesWithTitle>
                            <Img src={reLockerrom}/>
                            <ImgSpan>Liberado</ImgSpan>
                        </ImagesWithTitle>
                        <ImagesWithTitle> 
                            <Img src={pLockerrom}/>
                            <ImgSpan>Parcial</ImgSpan>
                        </ImagesWithTitle>
                        <ImagesWithTitle> 
                            <Img src={fLockerrom}/>
                            <ImgSpan>Fechado</ImgSpan>
                        </ImagesWithTitle>       
                    </ImagesContainer>
            </Mask>
        </ImgContainer>
        
    )
}