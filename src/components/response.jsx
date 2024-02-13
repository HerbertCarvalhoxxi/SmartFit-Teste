import { Context } from "../context"
import { useContext, useEffect, useState } from "react"
import Pagination from "./pagination"
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


    const ItensContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 0 10px 0;
    width: 100vw;
    `;

    const Item = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    max-width: 350px;
    min-width: 100px;
    margin: 15px 15px 0 15px;
    
    `;

    const Status = styled.p`
    display: flex;
    margin: 20px 0 10px 20px;
    color: green;
    font-weight: bolder;

    `;

    const Location = styled.p`
    display: flex;
    margin: 0 0 10px 20px;
    color: black;
    `;

    const Adress = styled.p`
    display: flex;
    flex-wrap: wrap;
    margin: 0 50px 10px 20px;
    `;

    const Hr = styled.span`
    height: 2px;
    max-width: 90%;
    display: flex;
    justify-content: flex-start;
    margin: 5px 3% 5px 3%;
    background-color: grey;
    `;

    const Images = styled.div`
    display: flex;
    align-itens: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 20px 0 20px;
    `;

    const Img = styled.img`
    margin: 10px 10px;
    width: 50px;
    height: 50px;
    `;

    const DivButtons = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
    width: 100vw;
    

    `;
    
    const Button = styled.button`
    background: rgba(0,0,0,0.0);
    border: none;
    margin: 25px 2.5px 0;
    cursor: pointer;
    `;

    const Group = styled.div`
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    width: 190px;
    margin: 0 0 30px 0;
  `;
  
    const Input = styled.input`
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: 0.3s ease;
  
    &::placeholder {
      color: #9e9ea7;
    }
  
    &:focus,
    &:hover {
      outline: none;
      border-color: rgba(234, 76, 137, 0.4);
      background-color: #fff;
      box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    }
  `;
  
    const Icon = styled.div`
    position: absolute;
    left: 1rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
    top: 25%;
  `;    

    const Open = styled.p`
    color: #2FC022;
    `;

    const Closed = styled.p`
    color: #dc0a17;
    `;

export default function Response(){

    const { responseApp, input } = useContext(Context)
    const [search, setSearch] = useState('')

    const response = responseApp

    const gymList = response.filter((gym)=>
    gym.title.toLowerCase().includes(search.toLowerCase()))
    
    
    const [itemsPerPage, setItemsPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(0);
  
    const pages = Math.ceil(gymList.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = gymList.slice(startIndex, endIndex);
  
    const goToPage = (page) => {
      setCurrentPage(page);
    };
  
    const goToFirstPage = () => {
      goToPage(0);
    };
  
    const goToPreviousPage = () => {
      if (currentPage > 0) {
        goToPage(currentPage - 1);
      }
    };
  
    const goToNextPage = () => {
      if (currentPage < pages - 1) {
        goToPage(currentPage + 1);
      }
    };
  
    const goToLastPage = () => {
      goToPage(pages - 1);
    };



    
      function removeText(str){
            const novaString = str.replace('</p>', '');
            const novaString2 = novaString.replace('<p>', '') 
            const novaString3 = novaString2.replace('<br>', ` `)
            const novaString4 = novaString3.replace(/&[^;]+;/g, '');
            return novaString4
          
    }

    return(
        <>
        {input === true ? 
    <DivButtons>   
        <Group>
            <Input type="text" placeholder="Busque academias" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            <Icon><ion-icon name="search-outline"></ion-icon></Icon>
      </Group>
    </DivButtons>     
        : <span></span>}
        <ItensContainer>
            {currentItems.map((item)=>{
                return(
                    <> 
                    <Item key={item.id}>
                        <Status>{item.opened == true ? <Open>Aberto</Open> : <Closed>Fechado</Closed>}</Status>
                        <Location>{item.title}</Location>
                        <Adress>{removeText(item.content)}</Adress>
                        <Hr></Hr>
                    <Images>
                        {item.mask === "required" ? 
                        <Img src={reqMask}/> : 
                        <Img src={rMask}/>  
                        }
                        {item.towel === "required" ? 
                        <Img src={reTowel}/> : 
                        <Img src={rTowel}/>  
                        }
                        {item.fountain === "partial" ? 
                        <Img src={pFountain}/> : 
                        <Img src={feFountain}/>  
                        }  
                        {item.locker_room === "allowed" ? 
                        <Img src={reLockerrom} /> : 
                        item.locker_room === "closed" ? 
                        <Img src={fLockerrom} /> :
                        <Img src={pLockerrom} />  
                    }
                    </Images>      
                    </Item>   
                          

                         
                         
                         
                         

                    
                </>
                    
                )    
            })}
        {input == true ?
            gymList == '' ? 
            <DivButtons><p>Nenhuma academia encontrada.</p></DivButtons>
            :
            <span></span>
            :
        <span></span>}

            
        {input === true ?  
    <DivButtons>
      <Button onClick={goToFirstPage}><ion-icon name="home-outline" size="small"></ion-icon></Button>
      <Button onClick={goToPreviousPage}><ion-icon name="chevron-back-outline" size="small"></ion-icon></Button>
      <Button onClick={goToNextPage}><ion-icon name="chevron-forward-outline" size="small"></ion-icon></Button>
      <Button onClick={goToLastPage}><ion-icon name="play-forward-outline" size="small"></ion-icon></Button>
      {currentItems.map((item, index) => (
        <div key={index}>{}</div>
      ))}
    </DivButtons> 
        : <span></span>}
        </ItensContainer>
            
        
        </>
    )
}