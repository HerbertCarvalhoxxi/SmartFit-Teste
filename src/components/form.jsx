import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import Hours from "../assets/icon-hour.png"
import { Context } from "../context";
import api from "../api";

const Form = styled.form`
    border: solid 2px #808080;
    justify-content: flex-start;
    margin: 30px 3% 2%;
    display: flex;
    flex-direction: column;
    `;
    
    const H2 = styled.h2`
    display: flex;
    align-itens: center;
    margin: 25px 20px;
    font-weight: bold;
    `;

    const ImgHours = styled.img`

    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
    `;

    const Ask = styled.h2`
    margin: 0 0 30px 2%;
    letter-spacing: 1px;
    display: flex;
    flex-wrap: wrap;
    color: #808080;

    `;

    const Hr = styled.span`
    height: 2px;
    max-width: 90%;
    display: flex;
    justify-content: flex-start;
    margin: 5px 3% 5px 3%;
    background-color: grey;
    `;

    const LabelInput = styled.label`
    display: flex;
    flex-wrap: wrap;
    align-itens: center;
    margin: 20px 0;
    `;

    const Turn = styled.p`
    flex-basis: 80%;
    margin-left: 3%;
    padding: 0 0 10px 5px;
    color: #808080;
    `;
  
    const Closed = styled.p`
    flex-basis: 75%;
    padding: 0 0 5px 0; 
    letter-spacing: 1px;
    `;

    const InputCheckbox = styled.input`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 1% 0 3%;
    `;

    const Buttons = styled.div`
    width: 100%;
    display: flex;
    align-itens: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    `;

    const ButtonOne = styled.button`
    margin: 10px 1% 20px 1%;
    padding: 10px 10%;
    border-radius: 6px;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    background-color: #FFB612;
    text-decoration: none;
    `;

    const ButtonTwo = styled.button`
    margin: 10px 1% 20px 1%;
    padding: 10px 10%;
    border-radius: 6px;
    border: 2px solid #808080;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    background-color: #ffffff;
    text-decoration: none;
    `;

    const Value = styled.span`
      font-weight: bold;
      font-size: 20px;  
    `;

export default function FormArea(){

    const [ items, setItens ] = useState([])
    const { closed, setClosed, responseApp, setResponse, setInput } = useContext(Context)

        

        function getItens(){
          setInput(true)
          if(closed === true){
            let filter = items.filter((item)=>{
              return (item.opened === true)
          })
          setResponse(filter)
          
          }
  
          else{
            setResponse(items)
            
          }
        }
      
        function clean(){
          setResponse([])
          setInput(false)

        }
      
      
      useEffect(()=>{
        async function loadApi(){
        await api.get('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')
        .then((r)=>{
            setItens(r.data.locations.slice(0, 116))
            
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    loadApi()

    },[])

    return(
        <>

          <Form>
            <H2><ImgHours src={Hours} alt=""/> Horário</H2>
            <Ask>Horários de funcionamento</Ask>
                <Hr></Hr>
           <LabelInput>
            <Turn>Manhã</Turn>
            <p>06:00 às 12:00</p>
            </LabelInput>
                <Hr></Hr>
           <LabelInput>
           
            <Turn>Tarde</Turn>
            <p> 12:01 às 18:00</p>
            </LabelInput>
                <Hr></Hr>
           <LabelInput>
            <Turn>Noite</Turn>
            <p> 18:01 às 22:00</p>
            </LabelInput>
              <Hr></Hr>
          <LabelInput>
              <InputCheckbox type="checkbox" name="checkbox" onChange={()=>{setClosed(!closed)}} />
              <Closed>Exibir unidades fechadas</Closed>
              <p>Resultados encontrados: <Value>{responseApp.length}</Value></p>
          </LabelInput>
          <Buttons>
            <ButtonOne type="button" onClick={()=> getItens()}>Buscar Resultados</ButtonOne>
            <ButtonTwo type="button" onClick={()=>clean()}>Limpar</ButtonTwo>
          </Buttons>
            
            </Form>
                
        </>
    )
}